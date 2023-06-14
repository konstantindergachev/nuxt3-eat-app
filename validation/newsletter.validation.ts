import { string, object } from 'yup';
import { MESSAGES } from '~~/validation/newsletter.constants';

const trimString = string().trim();

export const newsletterSchema = object().shape({
  email: trimString.email(MESSAGES.EMAIL_IS_VALID).required(MESSAGES.EMAIL_REQUIRED),
});
