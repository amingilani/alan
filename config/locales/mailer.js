var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// configure the mailer
var mailer = nodemailer.createTransport(smtpTransport({
    service : 'Mailgun',
    auth: {
        user: process.env.MG_USER,
        pass: process.env.MG_PASS
    }
}));

module.exports.mailer = mailer;
