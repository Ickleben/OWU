module.exports = {
    PORT: 5000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/lesson4',
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'REFRESH',

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'SECRET',
    ROOT_EMAIL_PASS: process.env.ROOT_EMAIL_PASS || 'SECRET'
};
