const router = require('express').Router();

const userRouter = require('./users.router');
const carsRouter = require('./cars.router');
const authRouter = require('./auth.router');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cars', carsRouter);

module.exports = router;
