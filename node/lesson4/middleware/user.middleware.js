const errorCodes = require('../constant/erroCodes.enum');
const errorMessages = require('../error/error.mesages');
const { userById } = require('../service/users.service');

module.exports = {
    checkId: async (req, res, next) => {
        try {
            const { idUser } = req.params;
            const findUser = await userById(idUser);

            if (idUser.length !== 24) {
                throw new Error(errorMessages.NOT_VALID_ID.en);
            }

            if (!findUser) {
                throw new Error(errorMessages.USER_DOES_NOT_EXISTS.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    validationUser: (req, res, next) => {
        try {
            const {
                name, age, password
            } = req.body;

            if (name.length > 12 || name.length < 2) {
                throw new Error(errorMessages.WRONG_NAME.en);
            }

            if (age > 100 || age < 12 || !Number.isInteger(age)) {
                throw new Error(errorMessages.NOT_VALID_AGE.en);
            }

            if (password.length > 20 || password.length < 6) {
                throw new Error(errorMessages.TOO_WEAK_PASSWORD.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
};
