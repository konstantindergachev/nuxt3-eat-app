import { IReview } from '@/interfaces/review';

export const usePostFormConfigs = () => {
  const form = reactive<IReview>({
    fullname: '',
    title: '',
    text: '',
  });

  const inputs = [
    {
      type: 'text',
      name: 'fullname',
      placeholder: 'John Doe',
      value: form.fullname,
      getValue: (value: string) => {
        form.fullname = value;
      },
    },
    {
      type: 'text',
      name: 'title',
      placeholder: 'Your title',
      value: form.title,
      getValue: (value: string) => {
        form.title = value;
      },
    },
    {
      type: 'text',
      name: 'text',
      placeholder: 'Your message',
      value: form.text,
      getValue: (value: string) => {
        form.text = value;
      },
    },
  ];

  return {
    inputs,
    form,
  };
};
