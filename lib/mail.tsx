import nodemailer from "nodemailer";
import { render } from "@react-email/render";

import {
  VerificationEmail,
  PasswordResetEmail,
  TwoFactorEmail,
} from "@/data/emails";

const domain = process.env.NEXT_PUBLIC_APP_URL;
const pass = process.env.NODEMAILER_SENDER_PASSWORD;
const emailSender = process.env.NODEMAILER_SENDER_EMAIL;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: emailSender, pass },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    const html = await render(<VerificationEmail confirmLink={confirmLink} />);

    await transporter.sendMail({
      from: emailSender,
      to: email,
      subject: "Confirm your email",
      html,
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  try {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    const html = await render(<PasswordResetEmail resetLink={resetLink} />);

    await transporter.sendMail({
      from: emailSender,
      to: email,
      subject: "Reset your password",
      html,
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendTwoFactorTokensEmail = async (
  email: string,
  token: string
) => {
  const html = await render(<TwoFactorEmail code={token} />);

  try {
    await transporter.sendMail({
      from: emailSender,
      to: email,
      subject: "2FA Code",
      html,
    });
  } catch (error) {
    console.error(error);
  }
};
