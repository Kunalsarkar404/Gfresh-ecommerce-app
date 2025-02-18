const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  auth: {
    user: 'vjkunal00@gmail.com',
    pass: 'kqxe ljqr qcru unnw'
  },
});

async function sendEmail(to, subject, text, html) {
  try {
    const mailOptions = {
      from: 'azy6049@gmail.com',
      to: to,
      subject: subject,
      text: text,
      html: html
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', to);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email: ', error);
    return { success: false, error: error.message };
  }
}



const toEmail = 'as1816444@gmail.com';
const emailSubject = 'Test Email';
const emailText = 'This is a test email sent from Node.js using Nodemailer.';
const emailHtml = ''

module.exports = sendEmail;