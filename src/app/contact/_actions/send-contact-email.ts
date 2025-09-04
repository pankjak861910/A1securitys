"use server";

import { transporter } from "@/lib/nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactFormData) {
  try {
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // send to yourself
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
			`,
    };
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: (error as Error).message };
  }
}
