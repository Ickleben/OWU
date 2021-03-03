const router = require('express').Router();

const userRouter = require('./users.router');
const carsRouter = require('./cars.router');

router.use('/users', userRouter);
router.use('/cars', carsRouter);
module.exports = router;
