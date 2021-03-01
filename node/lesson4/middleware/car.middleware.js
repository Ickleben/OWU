const errorCodes = require('../constant/erroCodes.enum');
const errorMessages = require('../error/error.mesages');

const { carById } = require('../service/cars.service');

module.exports = {
    CarValid: (req, res, next) => {
        try {
            const { model, price } = req.body;

            if (!model) {
                throw Error(errorMessages.FIELD_IS_EMPTY.en);
            }

            if (price < 0 || price > 9999999 || !Number.isInteger(price)) {
                throw Error(errorMessages.WRONG_PRICE.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    UpdataCarValid: (req, res, next) => {
        try {
            const { price } = req.body;

            if (price < 0 || price > 9999999 || !Number.isInteger(price)) {
                throw Error(errorMessages.WRONG_PRICE.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    IdCarValid: async (req, res, next) => {
        try {
            const { idCar } = req.params;
            const findCar = await carById(idCar);
            console.log(findCar);
            if (idCar.length !== 24) {
                throw new Error(errorMessages.NOT_VALID_ID.en);
            }

            if (!findCar) {
                throw new Error(errorMessages.CARS_DOES_NOT_EXISTS.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }

};
