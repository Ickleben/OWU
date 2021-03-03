const { carService } = require('../service');
const { confirmCodesEnum, errCodesEnum } = require('../constant');
const { confirmMessages } = require('../confirm');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const cars = await carService.allCars();

            res.json(cars);
        } catch (e) {
            res.status(errCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    findCarId: async (req, res) => {
        try {
            const { idCar } = req.params;
            const cars = await carService.carById(idCar);

            res.json(cars);
        } catch (e) {
            res.status(errCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    regCar: async (req, res) => {
        try {
            await carService.reg(req.body);
            res.status(confirmCodesEnum.CREATED).json(confirmMessages.CREATED.en);
        } catch (e) {
            res.status(errCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    deleteCar: async (req, res) => {
        try {
            const { idCar } = req.params;

            await carService.deleted(idCar);

            res.status(confirmCodesEnum.DELETED).json(confirmMessages.DELETE.en);
        } catch (e) {
            res.status(errCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    updateCar: async (req, res) => {
        try {
            const { body } = req;
            const { idCar } = req.params;
            const car = await carService.update(idCar, body);

            res.json(car);
        } catch (e) {
            res.status(errCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

};
