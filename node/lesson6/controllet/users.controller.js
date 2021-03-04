const { userService } = require('../service');
const { confirmCodesEnum, errorCodesEnum } = require('../constant');
const { confirmmMessages } = require('../confirm');
const { passHasher } = require('../helper');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.allUsers();

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
            const { password } = req.body;

            const hashPass = await passHasher.hash(password);

            await userService.reg({ ...req.body, password: hashPass });

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
            await userService.deleted(idUser);

           res.json(`${idUser} deleted`);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }

};
