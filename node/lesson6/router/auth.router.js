const router = require('express').Router();
const { authController } = require('../controllet');
const { authMiddleware } = require('../middleware');

router.post('/', authMiddleware.AuthUser, authController.authUser);
router.post('/refresh', authMiddleware.CheckRefreshTokenMiddleware, authController.CreateNewUserToken);

module.exports = router;
