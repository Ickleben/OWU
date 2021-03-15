const { models } = require('../dataBase');
const { queryBuilds } = require('../helper');
require('../dataBase/models/Car');

module.exports = {
    allUsers: async (query = {}) => {
        const {
            filters, keys, limit, filterObject, page, skip, sort
        } = await queryBuilds.queryBuild(query);
        keys.forEach((key) => {
            switch (key) {
                case 'userAgeGte':
                    filterObject.age = Object.assign({}, filterObject.age, { $gte: filters.userAgeGte });
                    break;
                case 'userAgeLte':
                    filterObject.age = Object.assign({}, filterObject.age, { $lte: filters.userAgeLte });
                    break;
                case 'name':
                    filterObject.name = { $regex: filters.name, $options: 'i' };
                    break;
                case 'email':
                    filterObject.email = { $regex: filters.email, $options: 'i' };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });
       const user = await models.User.find(filterObject).limit(limit).skip(skip).sort(sort);
        const count = await models.User.countDocuments(filterObject);
        const countPage = Math.ceil(count / (+limit));
        return {
            data: user,
            page,
            limit,
            countPage
        };
    },
    userById: (idUser) => models.User.findById(idUser),
    reg: (userBody) => models.User.create(userBody),
    deleted: (idUser) => models.User.findByIdAndDelete(idUser),
    updateUser: (idUser, data) => models.User.updateOne({ _id: idUser }, { $set: data }),
};
