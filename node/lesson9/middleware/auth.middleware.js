const jwt = require('jsonwebtoken');
const { authService } = require('../service');
const { errorCodesEnum } = require('../constant');
const { JWT_SECRET } = require('../configuration/configuration');

module.exports = {
    AuthUser: async (req, res, next) => {
        const { email } = req.body;
        try {
            const user = await authService.authUser({ email });
            if (!user) {
                throw new Error('Wrong email or password');
            }
            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    CheckAceesTokenMiddleware: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            if (!access_token) {
                throw new Error('Token is required');
            }
            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error('Not Valid token');
                }
            });
            const tokens = await authService.oAuthFindOne(access_token);

            if (!tokens) {
                throw new Error('Not valid token');
            }

            req.user = tokens._user_id;
            next();
        } catch (e) {
            res.json(e.message);
        }
    },
    CheckRefreshTokenMiddleware: async (req, res, next) => {
        try {
            const refresh_token = req.get('Authorization');

            if (!refresh_token) {
                throw new Error('Token is required');
            }
            jwt.verify(refresh_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error('Not Valid token');
                }
            });
            const tokens_refresh = await authService.oAuthFindOne(refresh_token);
            if (!tokens_refresh) {
                throw new Error('Not valid token');
            }
            req.tokens = tokens_refresh._user_id;
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
