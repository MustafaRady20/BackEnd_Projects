const nodemailer = require("nodemailer");

const homePage = (req, res) => {
  res.render("index.jade");
};

const aboutPage = (req, res) => {
  res.render("about.jade");
};

const contactPage = (req, res) => {
  res.render("contact.jade");
};

const sendE_Mail = (req, res) => {
  // const { name, lastName } = req.body;
  // console.log("send data", name, lastName);

  const tarnsporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
  });

  const mailOptions = {
    from: "",
    to: "",
    subject: "",
    text: "test sending email form nodejs server using nodemailer with these info name: ",
  };

  tarnsporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.redirect("/");
    } else {
      console.log("Message Sent", info.response);
      res.redirect("/");
    }
  });
};

module.exports = {
  homePage,
  aboutPage,
  contactPage,
  sendE_Mail,
};
