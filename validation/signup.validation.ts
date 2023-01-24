import { string, object } from 'yup';

import { CHARCOUNT, MESSAGES } from './signup.constants';

const trimString = string().trim();

export const signupSchema = object().shape({
  fullname: trimString
    .min(CHARCOUNT.FULLNAME_MIN, MESSAGES.FULLNAME_MIN)
    .max(CHARCOUNT.FULLNAME_MAX, MESSAGES.FULLNAME_MAX)
    .required(),
  email: trimString.email(MESSAGES.EMAIL_IS_VALID).required(MESSAGES.EMAIL_REQUIRED),
  password: trimString
    .min(CHARCOUNT.PASSWORD_MIN, MESSAGES.PASSWORD_MIN)
    .max(CHARCOUNT.PASSWORD_MAX, MESSAGES.PASSWORD_MAX)
    .required(),
  passwordConfirm: trimString
    .min(CHARCOUNT.PASSWORD_CONFIRM_MIN, MESSAGES.PASSWORD_CONFIRM_MIN)
    .max(CHARCOUNT.PASSWORD_CONFIRM_MAX, MESSAGES.PASSWORD_CONFIRM_MAX)
    .required(),
});
