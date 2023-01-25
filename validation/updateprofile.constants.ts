export const CHARCOUNT = {
  FULLNAME_MIN: 2,
  FULLNAME_MAX: 50,
  LOCATION_MIN: 2,
  LOCATION_MAX: 50,
  OLDPASSWORD_MIN: 6,
  OLDPASSWORD_MAX: 100,
  NEWPASSWORD_MIN: 6,
  NEWPASSWORD_MAX: 100,
};

export const MESSAGES = {
  FULLNAME_MIN: `full name must be at least ${CHARCOUNT.FULLNAME_MIN} characters`,
  FULLNAME_MAX: `full name must be shorter than ${CHARCOUNT.FULLNAME_MAX} characters`,
  LOCATION_MIN: `location must be at least ${CHARCOUNT.LOCATION_MIN} characters`,
  LOCATION_MAX: `location must be shorter than ${CHARCOUNT.LOCATION_MAX} characters`,
  EMAIL_REQUIRED: 'email is a required field',
  EMAIL_IS_VALID: 'email must be a valid email',
  OLDPASSWORD_MIN: `old password must be at least ${CHARCOUNT.OLDPASSWORD_MIN} characters`,
  OLDPASSWORD_MAX: `old password must be shorter than ${CHARCOUNT.OLDPASSWORD_MAX} characters`,
  NEWPASSWORD_MIN: `new password must be at least ${CHARCOUNT.NEWPASSWORD_MIN} characters`,
  NEWPASSWORD_MAX: `new password must be shorter than ${CHARCOUNT.NEWPASSWORD_MAX} characters`,
};
