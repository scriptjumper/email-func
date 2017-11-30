var mail = require("nodemailer").mail;

exports.handler = (event, context, callback) => {
    mail({
        from: "test@email.com", // sender address
        to: "testemail2@email.com", // list of receivers
        subject: "Subject-to-add", // Subject line
        text: "message to reciever"
    });
};
