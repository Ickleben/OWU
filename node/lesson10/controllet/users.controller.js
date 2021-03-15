const { mailService, userService, fileService } = require('../service');
const { confirmCodesEnum, errorCodesEnum, emailActionsEnum } = require('../constant');
const { confirmmMessages } = require('../confirm');
const { passHasher } = require('../helper');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.allUsers(req.query);

            res.json(users);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    findUserId: async (req, res) => {
        try {
            const { idUser } = req.params;
            const users = await userService.userById(idUser);

            res.json(users);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    regUser: async (req, res) => {
        try {
            const { body: { password, email }, avatar } = req;

            const hashPass = await passHasher.hash(password);

            const user = await userService.reg({ ...req.body, password: hashPass });

            if (avatar) {
                const uploadPath = await fileService.BuildDir(avatar, avatar.name, 'photo', 'user', user._id);
                await userService.updateUser(user._id, { avatar: uploadPath });
            }

            await mailService.SendEMail(email, emailActionsEnum.WELCOME, { userName: email });

            res.status(confirmCodesEnum.CREATED).json(confirmmMessages.CREATED.en);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { idUser } = req.params;
            if (idUser !== req.user._id.toString()) {
                throw new Error('Unauthorized');
            }
            const users = await userService.userById(idUser);

            await userService.deleted(idUser);

            await mailService.SendEMail(users.email, emailActionsEnum.USER_DELETED, { userName: users.email });

            res.json(`${idUser} deleted`);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    updateUser: async (req, res) => {
        try {
            const { body } = req;
            const { idUser } = req.params;
            const user = await userService.updateUser(idUser, body);

            await mailService.SendEMail(body.email, emailActionsEnum.USER_CHANGED, { userName: body.email });
            res.json(user);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
