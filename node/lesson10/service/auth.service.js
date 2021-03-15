const { models } = require('../dataBase');

module.exports = {
    authUser: (email) => models.User.findOne(email),
    oAuthCreate: (tokens, user) => models.O_Auth.create({ ...tokens, _user_id: user._id }),
    oAuthFindOne: (access_token) => models.O_Auth.findOne({ access_token }).populate('_user_id'),
    oAuthFindOneDelete: (tokens) => models.O_Auth.findByIdAndRemove(tokens._id)
};
