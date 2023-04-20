import { ISignup } from '@/interfaces/signup';

export const useSignupFormConfigs = () => {
  const form = reactive<ISignup>({
    fullname: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
    {
      type: 'password',
      name: 'passwordConfirm',
      placeholder: '******',
      value: form.passwordConfirm,
      getValue: (value: string) => {
        form.passwordConfirm = value;
      },
    },
  ];

  return {
    inputs,
    form,
  };
};
