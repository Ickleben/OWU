const { passHasher, tokenizer } = require('../helper');
const { authService } = require('../service');
const { errorCodesEnum } = require('../constant');

module.exports = {

    authUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await authService.authUser({ email });
            await passHasher.compare(password, user.password);

            const tokens = tokenizer();

            await authService.oAuthCreate(tokens, user);
            res.json(tokens);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    CreateNewUserToken: async (req, res) => {
        const { tokens } = req;
        try {
            await authService.oAuthFindOneDelete(tokens);
            const newTokens = tokenizer();
            await authService.oAuthCreate(newTokens, tokens);
            res.json(newTokens);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
};
