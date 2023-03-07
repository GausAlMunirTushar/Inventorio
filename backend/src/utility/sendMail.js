const nodemailer = require('nodemailer');

const sendMail = async (emailTo, emailText, emailSubject) => {
    // connect with smtp
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'fleta.hammes@ethereal.email',
            pass: 'daV3ZDDpptBg7muNyb'
        },tls: {
            rejectUnauthorized: false
        },
    });
    let mailOptions = {
        from: '"inventro App" <contact@gausalmunirtushar.me>',
        to: emailTo,
        subject: emailSubject,
        text: emailText
    };
}

module.export = sendMail;