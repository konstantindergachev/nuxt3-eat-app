import emailjs from '@emailjs/browser';
import Input from '@/components/UI/Input.vue';
import { INewsletterForm, INewsletterFormError } from '@/interfaces/newsletter';
import { newsletterSchema } from '@/validation/newsletter.validation';
import { NEWSLETTER_MESSAGE, SOMETHING_WENT_WRONT, UNEXPECTED } from '@/stub/constants';

export const useNewsletter = () => {
  const form = reactive<INewsletterForm>({
    email: '',
  });

  const errors = reactive<INewsletterFormError>({
    email: '',
    request: '',
  });

  const inputs = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'test@test.com',
      getValue: computed(() => form.email),
      setValue: (value: string) => {
        form.email = value;
      },
      component: Input,
      error: computed(() => errors.email),
    },
  ];

  const message = ref('');
  let timeoutId = ref(0);

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY as string;

  const handleSubmit = async () => {
    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      if (result.text) {
        message.value = NEWSLETTER_MESSAGE;
        form.email = '';

        timeoutId.value = window.setTimeout(() => {
          message.value = '';
        }, 5000);
      }
    } catch (err) {
      if (err instanceof Error) {
        errors.request = SOMETHING_WENT_WRONT;

        timeoutId.value = window.setTimeout(() => {
          errors.request = '';
        }, 5000);
      } else {
        errors.request = UNEXPECTED;

        timeoutId.value = window.setTimeout(() => {
          errors.request = '';
        }, 5000);
      }
    }
  };

  const validate = async (field: keyof INewsletterFormError) => {
    try {
      await newsletterSchema.validateAt(field, form);
      errors[field] = '';
    } catch (error) {
      if (error instanceof Error) {
        errors[field] = error.message;
      } else {
        errors[field] = UNEXPECTED;
      }
    }
  };

  return {
    handleSubmit,
    inputs,
    message,
    validate,
    errors,
    timeoutId,
  };
};
