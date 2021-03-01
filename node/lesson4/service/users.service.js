const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
    allUsers: () => User.find(),
    userById: (idUser) => User.findById(idUser),
    reg: (userBody) => User.create(userBody),
    deleted: (idUser) => User.findByIdAndDelete(idUser)
};
