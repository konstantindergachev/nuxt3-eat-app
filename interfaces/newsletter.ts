export interface INewsletterForm {
  email: string;
}
export interface INewsletterFormError {
  email: string;
  request: string;
}

export interface INewsletter {
  title?: string;
  description?: string;
}

export interface INewsletterResponse {
  message: string;
  info: string;
}

export interface INewsletterResponseError {
  error: string;
}

export type TNewsletterResponse<T> = T | INewsletterResponseError;
