const router = require('express').Router();

const userMiddleware = require('../middleware/user.middleware');
const userController = require('../controllet/users.controller');

router.get('/', userController.getAllUsers);

router.get('/:idUser', userMiddleware.checkId, userController.findUserId);

router.delete('/:idUser', userMiddleware.checkId, userController.deleteUser);

router.post('/', userMiddleware.validationUser, userController.regUser);

module.exports = router;
