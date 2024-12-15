import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: process.env.NODE_ENV !== "development",
//   auth: {
//     user: "api",
//     pass: process.env.MAIL_PASS,
//   },
// } as SMTPTransport.Options);
const transport = nodemailer.createTransport({
  service: "gmail",
  // host: process.env.MAIL_HOST,
  // port: process.env.MAIL_PORT,
  // secure: process.env.NODE_ENV !== "development",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
} as SMTPTransport.Options);

type SendEmailDTo = {
  sender: Mail.Address;
  recipient: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = (dtoL: SendEmailDTo) => {
  const { sender, recipient, subject, message } = dtoL;
  return transport.sendMail({
    from: sender,
    to: recipient,
    subject: subject,
    text: message,
    html: message,
  });
};
