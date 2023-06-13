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
