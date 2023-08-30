const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const frogetPw = async (req, res) => {
  const { email } = req.body;
  const userModel = mongoose.model("user");

  if (!email) throw "Email is required";

  const user = await userModel.findOne({ email: email });

  if (!user) throw "Not found user";
  const resetCode = Math.floor(10000 + Math.random() * 90000);
  await userModel.findOneAndUpdate(
    {
      email: email,
    },
    {
      resetCode: resetCode,
    },
    {
      runValidators: true,
    }
  );

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "97ca5b63974947",
      pass: "84229e0fae4b7a"
    }
  });

  await transport.sendMail({
    to:email,
    from:"info@expensive.com",
    subject:"password reset code",
    text:"your password reset code is "+resetCode
  })

  res.status(200).json({
    status: "succesfully",
  });
};

module.exports = frogetPw;
