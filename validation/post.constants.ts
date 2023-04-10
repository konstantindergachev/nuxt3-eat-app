export const CHARCOUNT = {
  FULLNAME_MIN: 2,
  FULLNAME_MAX: 50,
  TITLE_MIN: 2,
  TITLE_MAX: 50,
  TEXT_MIN: 10,
  TEXT_MAX: 300,
};

export const MESSAGES = {
  FULLNAME_MIN: `full name must be at least ${CHARCOUNT.FULLNAME_MIN} characters`,
  FULLNAME_MAX: `full name must be shorter than ${CHARCOUNT.FULLNAME_MAX} characters`,
  TITLE_MIN: `title must be at least ${CHARCOUNT.TITLE_MIN} characters`,
  TITLE_MAX: `title must be shorter than ${CHARCOUNT.TITLE_MAX} characters`,
  TEXT_MIN: `text must be at least ${CHARCOUNT.TEXT_MIN} characters`,
  TEXT_MAX: `text must be shorter than ${CHARCOUNT.TEXT_MAX} characters`,
};
