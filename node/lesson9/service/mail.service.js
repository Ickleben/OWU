const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const { errorMesages } = require('../error');
const { ROOT_EMAIL, ROOT_EMAIL_PASS } = require('../configuration/configuration');
const templateInf = require('../email-templates');

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASS
    }
});
const SendEMail = async (userMail, action, context) => {
    try {
        const templateInformation = templateInf[action];

        if (!templateInformation) {
            throw new Error(errorMesages.WRONG_EMAIL_ACTION.en);
        }

        const html = await templateParser.render(templateInformation.templateName, context);
        return transporter.sendMail({
            from: 'NO_REPLY',
            to: userMail,
            subject: templateInformation.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    SendEMail
};
