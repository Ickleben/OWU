const { erroCodesEnum } = require('../constant');
const { userValidators } = require('../validators');

const { errorMesages } = require('../error');

const { userById } = require('../service/users.service');

module.exports = {
    checkId: async (req, res, next) => {
        try {
            const { idUser } = req.params;
            const findUser = await userById(idUser);

            if (idUser.length !== 24) {
                throw new Error(errorMesages.NOT_VALID_ID.en);
            }

            if (!findUser) {
                throw new Error(errorMesages.USER_DOES_NOT_EXISTS.en);
            }

            next();
        } catch (e) {
            res.status(erroCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    validationUser: (req, res, next) => {
        try {
            const { error } = userValidators.CreateUserValidator.validate(req.body);
            if (error) {
                throw new Error(error.details[0].message);
            }
            next();
        } catch (e) {
            res.status(erroCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
};
