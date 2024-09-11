import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "giovanna.wiegand@ethereal.email",
    pass: "mfVy9e623sNPPk5n4Y",
  },
});
