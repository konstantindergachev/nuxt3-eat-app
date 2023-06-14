import { IReview, IReviewErrors, IReviewResponse } from '~~/interfaces/review';
import Input from '~~/components/UI/Input.vue';
import TextArea from '~~/components/UI/TextArea.vue';
import { useStorePost } from '~~/stores/post.js';
import { postSchema } from '~~/validation/post.validation';
import { UNEXPECTED } from '~~/stub/constants';

export const usePost = () => {
  const form = reactive<IReview>({
    fullname: '',
    title: '',
    text: '',
  });

  const errors = reactive<IReviewErrors>({
    fullname: '',
    title: '',
    text: '',
    request: '',
  });

  const inputs = [
    {
      type: 'text',
      name: 'fullname',
      placeholder: 'John Doe',
      getValue: computed(() => form.fullname),
      setValue: (value: string) => {
        form.fullname = value;
      },
      component: Input,
      error: computed(() => errors.fullname),
    },
    {
      type: 'text',
      name: 'title',
      placeholder: 'Your title',
      getValue: computed(() => form.title),
      setValue: (value: string) => {
        form.title = value;
      },
      component: Input,
      error: computed(() => errors.title),
    },
    {
      type: 'text',
      name: 'text',
      placeholder: 'Your message',
      getValue: computed(() => form.text),
      setValue: (value: string) => {
        form.text = value;
      },
      component: TextArea,
      error: computed(() => errors.text),
    },
  ];

  const validate = async (field: keyof IReviewErrors) => {
    try {
      await postSchema.validateAt(field, form);
      errors[field] = '';
    } catch (error) {
      if (error instanceof Error) {
        errors[field] = error.message;
      } else {
        errors[field] = UNEXPECTED;
      }
    }
  };

  const storePost = useStorePost();

  const handleSubmit = async () => {
    try {
      const response = await $fetch<IReviewResponse>('/api/reviews', {
        method: 'post',
        body: form,
      });
      errors.request = response.statusText;

      storePost.addPost(form);

      form.fullname = '';
      form.title = '';
      form.text = '';
    } catch (error) {
      if (error instanceof Error) {
        errors.request = error.message;
      }
    }
  };

  return {
    handleSubmit,
    inputs,
    validate,
    errors,
  };
};
