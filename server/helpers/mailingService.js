const node_mailer = require("nodemailer");

let transporter = node_mailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY
  },
});

const sendEmail = async (email, subject, html) => {
  const message = {
    from: "info@yord.wiki",
    to: email,
    subject,
    html,
  };

  try {
    const result = await transporter.sendMail(message);
    return result;
  } catch (err) {
    console.log(err)
  }
};

const sendContactEmail = async (email, subject, message, name) => {
  let mail = {
    from: "dreamingalleria@gmail.com",
    to: "dreamingalleria@gmail.com",
    subject: `${subject}`,
    html: `
          <h2>New message!</h2>
          <div><b>Name:</b>${name}</div>
          <div><b>Email:</b>${email}</div>
          <b>Message:</b>
          <p>${message} </p>`,
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log("Error occurred");
      console.log(error.message);
    } else {
      console.log("Message sent successfully!");
    }

    transporter.close();
  });
};

module.exports = { sendEmail, sendContactEmail };
