import { string, object } from 'yup';

import { CHARCOUNT, MESSAGES } from './updateprofile.constants';

const trimString = string().trim();

export const updateProfileSchema = object().shape({
  fullname: trimString
    .min(CHARCOUNT.FULLNAME_MIN, MESSAGES.FULLNAME_MIN)
    .max(CHARCOUNT.FULLNAME_MAX, MESSAGES.FULLNAME_MAX)
    .required(),
  email: trimString.email(MESSAGES.EMAIL_IS_VALID).required(MESSAGES.EMAIL_REQUIRED),
  location: trimString
    .min(CHARCOUNT.LOCATION_MIN, MESSAGES.LOCATION_MIN)
    .max(CHARCOUNT.LOCATION_MAX, MESSAGES.LOCATION_MAX)
    .required(),
  oldPassword: trimString
    .min(CHARCOUNT.OLDPASSWORD_MIN, MESSAGES.OLDPASSWORD_MIN)
    .max(CHARCOUNT.OLDPASSWORD_MAX, MESSAGES.OLDPASSWORD_MAX)
    .required(),
  newPassword: trimString
    .min(CHARCOUNT.NEWPASSWORD_MIN, MESSAGES.NEWPASSWORD_MIN)
    .max(CHARCOUNT.NEWPASSWORD_MAX, MESSAGES.NEWPASSWORD_MAX)
    .required(),
  newPasswordConfirm: trimString
    .min(CHARCOUNT.NEWPASSWORD_MIN, MESSAGES.NEWPASSWORD_MIN)
    .max(CHARCOUNT.NEWPASSWORD_MAX, MESSAGES.NEWPASSWORD_MAX)
    .required(),
});
