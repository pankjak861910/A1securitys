import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.SMTP_HOST as string,
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_EMAIL as string,
    pass: process.env.SMTP_PASSWORD as string,
  },
});
