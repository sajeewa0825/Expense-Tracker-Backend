const nodemailer = require("nodemailer")

const sendMail = async (to, subject, text) =>{
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "97ca5b63974947",
          pass: "84229e0fae4b7a"
        }
      });

    await transport.sendMail({
        to:to,
        from:"info@expensive.com",
        text:text,
        subject:subject
    })
}

module.exports = sendMail;