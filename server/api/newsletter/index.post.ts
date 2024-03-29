import nodemailer from 'nodemailer';
import {
  NEWSLETTER_MESSAGE,
  SOMETHING_WENT_WRONT,
  UNEXPECTED,
  MAIL_TITLE,
  MAIL_DESCRIPTION,
  MAIL_SIGNATURE,
} from '~~/stub/constants';

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: ADMIN_EMAIL,
      pass: ADMIN_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Kostya Dergachov 👻" <${ADMIN_EMAIL}>`, // sender address
      to: body.email, // list of receivers
      subject: `${MAIL_TITLE} ✔`,
      text: `${MAIL_DESCRIPTION}`,
      html: `<p style="color: green; font-size: 18px;">${MAIL_DESCRIPTION}</p><p><h6 style="color: black; font-size: 10px;">${MAIL_SIGNATURE}<h6></p>`,
    });

    return { message: NEWSLETTER_MESSAGE, info: info.messageId };
  } catch (error) {
    if (error instanceof Error) {
      return { error: SOMETHING_WENT_WRONT };
    } else {
      return { error: UNEXPECTED };
    }
  }
});
