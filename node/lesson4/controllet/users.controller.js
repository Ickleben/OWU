const userService = require('../service/users.service');
const confirmCodes = require('../constant/confirmCodes.enum');
const errorCodes = require('../constant/erroCodes.enum');
const confirmMessages = require('../confirm/condirm.messages');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.allUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    findUserId: async (req, res) => {
        try {
            const { idUser } = req.params;
            const users = await userService.userById(idUser);

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    regUser: async (req, res) => {
        try {
            await userService.reg(req.body);

            res.status(confirmCodes.CREATED).json(confirmMessages.CREATED.en);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { idUser } = req.params;

            await userService.deleted(idUser);

            res.status(confirmCodes.DELETED).json(confirmMessages.DELETE.en);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }

};
