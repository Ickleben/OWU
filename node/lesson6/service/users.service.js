const { models } = require('../dataBase');
require('../dataBase/models/Car');

module.exports = {
    allUsers: () => models.User.find(),
    userById: (idUser) => models.User.findById(idUser),
    reg: (userBody) => models.User.create(userBody),
    deleted: (idUser) => models.User.findByIdAndDelete(idUser)
};
