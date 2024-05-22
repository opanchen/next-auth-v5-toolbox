import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  };

  transport.sendMail(mailOptions, function (err) {
    if (!err) {
      console.log("Email sent");
    } else {
      console.log("NODEMAILER ERROR: ", err);
    }
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  };

  transport.sendMail(mailOptions, function (err) {
    if (!err) {
      console.log("Email sent");
    } else {
      console.log("NODEMAILER ERROR: ", err);
    }
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code ${token}</p>`,
  };

  transport.sendMail(mailOptions, function (err) {
    if (!err) {
      console.log("Email sent");
    } else {
      console.log("NODEMAILER ERROR: ", err);
    }
  });
};
