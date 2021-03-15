const Joi = require('joi');
const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50),
    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required()
});
