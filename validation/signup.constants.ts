export const CHARCOUNT = {
  FULLNAME_MIN: 2,
  FULLNAME_MAX: 50,
  PASSWORD_MIN: 6,
  PASSWORD_MAX: 100,
  PASSWORD_CONFIRM_MIN: 6,
  PASSWORD_CONFIRM_MAX: 100,
};

export const MESSAGES = {
  FULLNAME_MIN: `full name must be at least ${CHARCOUNT.FULLNAME_MIN} characters`,
  FULLNAME_MAX: `full name must be shorter than ${CHARCOUNT.FULLNAME_MAX} characters`,
  EMAIL_REQUIRED: 'email is a required field',
  EMAIL_IS_VALID: 'email must be a valid email',
  PASSWORD_MIN: `password must be at least ${CHARCOUNT.PASSWORD_MIN} characters`,
  PASSWORD_MAX: `password must be shorter than ${CHARCOUNT.PASSWORD_MAX} characters`,
  PASSWORD_CONFIRM_MIN: `password confirm must be at least ${CHARCOUNT.PASSWORD_CONFIRM_MIN} characters`,
  PASSWORD_CONFIRM_MAX: `password confirm must be shorter than ${CHARCOUNT.PASSWORD_CONFIRM_MAX} characters`,
};
