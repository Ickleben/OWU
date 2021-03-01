const Car = require('../dataBase/models/Car');

module.exports = {
    allCars: () => Car.find(),
    carById: (idCar) => Car.findById(idCar),
    reg: (carBody) => Car.create(carBody),
    deleted: (idCar) => Car.findByIdAndDelete(idCar),
    update: (idCar, data) => Car.findOneAndUpdate(idCar, data)
};
