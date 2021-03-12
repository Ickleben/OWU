 const router = require('express').Router();

const { carMiddleware } = require('../middleware');
const { carsController } = require('../controllet');

router.get('/', carsController.getAllCars);

router.get('/:idCar', carMiddleware.IdCarValid, carsController.findCarId);

router.delete('/:idCar', carMiddleware.IdCarValid, carsController.deleteCar);

router.put('/:idCar', carMiddleware.UpdataCarValid, carMiddleware.IdCarValid, carsController.updateCar);

router.post('/', carMiddleware.CarValid, carsController.regCar);

module.exports = router;
