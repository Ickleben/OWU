const { models } = require('../dataBase');

module.exports = {
    allCars: () => models.Car.find(),
    carById: (idCar) => models.Car.findById(idCar),
    reg: (carBody) => models.Car.create(carBody),
    deleted: (idCar) => models.Car.findByIdAndDelete(idCar),
    update: (idCar, data) => models.Car.findOneAndUpdate(idCar, data)
};
