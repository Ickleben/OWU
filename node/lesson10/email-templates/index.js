const { emailActionsEnum } = require('../constant');

module.exports = {
    [emailActionsEnum.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome'
    },

    [emailActionsEnum.USER_DELETED]: {
        templateName: 'userDelete',
        subject: 'Your account was deleted'
    },

    [emailActionsEnum.USER_CHANGED]: {
        templateName: 'useChanged',
        subject: 'User was changed'
    }
};
