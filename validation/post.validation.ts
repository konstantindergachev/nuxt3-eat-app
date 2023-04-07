import { string, object } from 'yup';

import { CHARCOUNT, MESSAGES } from './post.constants';

const trimString = string().trim();

export const postSchema = object().shape({
  fullname: trimString
    .min(CHARCOUNT.FULLNAME_MIN, MESSAGES.FULLNAME_MIN)
    .max(CHARCOUNT.FULLNAME_MAX, MESSAGES.FULLNAME_MAX)
    .required(),
  text: trimString
    .min(CHARCOUNT.TEXT_MIN, MESSAGES.TEXT_MIN)
    .max(CHARCOUNT.TEXT_MAX, MESSAGES.TEXT_MAX)
    .required(),
});
