const fs = require('fs-extra');
const path = require('path');

const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

const dataBase = path.join(process.cwd(), 'dataBase', 'users.json');

module.exports = {
    checkId: (req, res, next) => {
        try {
            const idUser = +req.params.idUser;

            if (idUser < 0 || !Number.isInteger(idUser) || Number.isNaN(idUser)) {

                throw new Error(errorMessages.NOT_VALID_ID["ua"]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    validationUser: (req, res, next) => {
        try {
            const {name, email, password, preferL = 'ua'} = req.body;

            if (!name || email || password) {
                throw new Error(errorMessages.FIELD_IS_EMPTY[preferL]);
            }

            if (email.length < 5) {
                throw new Error(errorMessages.WRONG_EMAIL[preferL]);
            }

            if (password.length < 6) {
                throw new Error(errorMessages.TOO_WEAK_PASSWORD[preferL]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    findValidation: async (req, res, next) => {
        try {
            const {email, nickname, preferL = 'ua'} = req.body;

            const check = await fs.readJson(dataBase);

            const validation = check.find(value => value.email === email || value.nickname === nickname);

            if (validation == undefined) {

                throw new Error(errorMessages.WRONG_EMAIL_NICKNAME[preferL]);
            }
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}
