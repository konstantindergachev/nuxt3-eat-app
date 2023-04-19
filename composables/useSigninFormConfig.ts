import { ISignin } from '@/interfaces/signin';

export const useFormConfigs = () => {
  const form = reactive<ISignin>({
    email: '',
    password: '',
  });

  const inputs = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'test@test.com',
      value: form.email,
      getValue: (value: string) => {
        form.email = value;
      },
    },
    {
      type: 'password',
      name: 'password',
      placeholder: '******',
      value: form.password,
      getValue: (value: string) => {
        form.password = value;
      },
    },
  ];

  return {
    inputs,
    form,
  };
};
