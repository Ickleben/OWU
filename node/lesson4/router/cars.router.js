const router = require('express').Router();

const carsMiddleware = require('../middleware/car.middleware');
const carsController = require('../controllet/cars.controller');

router.get('/', carsController.getAllCars);

router.get('/:idCar', carsMiddleware.IdCarValid, carsController.findCarId);

router.delete('/:idCar', carsMiddleware.IdCarValid, carsController.deleteCar);

router.put('/:idCar', carsMiddleware.UpdataCarValid, carsMiddleware.IdCarValid, carsController.updateCar);

router.post('/', carsMiddleware.CarValid, carsController.regCar);

module.exports = router;
