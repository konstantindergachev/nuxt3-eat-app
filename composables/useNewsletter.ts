import Input from '~~/components/UI/Input.vue';
import {
  INewsletterForm,
  INewsletterFormError,
  INewsletterResponse,
  TNewsletterResponse,
} from '~~/interfaces/newsletter';
import { newsletterSchema } from '~~/validation/newsletter.validation';
import { SOMETHING_WENT_WRONT, UNEXPECTED } from '~~/stub/constants';

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

  const handleSubmit = async () => {
    const response: TNewsletterResponse<INewsletterResponse> = await $fetch('/api/newsletter', {
      method: 'post',
      body: form,
    });

    if ('error' in response) {
      errors.request = response.error;
      timeoutId.value = window.setTimeout(() => {
        errors.request = '';
      }, 5000);
    } else {
      message.value = response.message;
      form.email = '';

      timeoutId.value = window.setTimeout(() => {
        message.value = '';
      }, 5000);
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
