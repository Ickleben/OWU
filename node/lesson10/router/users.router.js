const router = require('express').Router();
const { authMiddleware, userMiddleware, fileMiddleware } = require('../middleware');
const { userController } = require('../controllet');

router.get('/', userController.getAllUsers);

router.get('/:idUser', userMiddleware.checkId, userController.findUserId);

router.delete('/:idUser', userMiddleware.checkId, authMiddleware.CheckAceesTokenMiddleware, userController.deleteUser);

router.post('/',
    fileMiddleware.checkFileUpload,
    fileMiddleware.checkAmountPhoto,
    userMiddleware.validationUser,
    userController.regUser);

router.put('/:idUser', userMiddleware.checkId, userController.updateUser);

module.exports = router;
