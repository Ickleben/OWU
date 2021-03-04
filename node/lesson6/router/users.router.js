const router = require('express').Router();
const { authMiddleware } = require('../middleware');
const { userMiddleware } = require('../middleware');
const { userController } = require('../controllet');

router.get('/', userController.getAllUsers);

router.get('/:idUser', userMiddleware.checkId, userController.findUserId);

router.delete('/:idUser', userMiddleware.checkId, authMiddleware.CheckAceesTokenMiddleware, userController.deleteUser);

router.post('/', userMiddleware.validationUser, userController.regUser);

module.exports = router;
