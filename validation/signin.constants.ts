export const CHARCOUNT = {
  PASSWORD_MIN: 6,
  PASSWORD_MAX: 100,
};

export const MESSAGES = {
  EMAIL_REQUIRED: 'email is a required field',
  EMAIL_IS_VALID: 'email must be a valid email',

  PASSWORD_MIN: `password must be at least ${CHARCOUNT.PASSWORD_MIN} characters`,
  PASSWORD_MAX: `password must be shorter than ${CHARCOUNT.PASSWORD_MAX} characters`,
};
