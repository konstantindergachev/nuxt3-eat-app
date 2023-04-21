import { IUpdateProfile } from '@/interfaces/profile';

export const useProfileFormConfigs = () => {
  const form = reactive<IUpdateProfile>({
    fullname: '',
    email: '',
    location: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
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
      type: 'text',
      name: 'location',
      placeholder: 'City, Country',
      value: form.location,
      getValue: (value: string) => {
        form.location = value;
      },
    },
    {
      type: 'password',
      name: 'oldPassword',
      placeholder: '******',
      value: form.oldPassword,
      getValue: (value: string) => {
        form.oldPassword = value;
      },
    },
    {
      type: 'password',
      name: 'newPassword',
      placeholder: '******',
      value: form.newPassword,
      getValue: (value: string) => {
        form.newPassword = value;
      },
    },
    {
      type: 'password',
      name: 'newPasswordConfirm',
      placeholder: '******',
      value: form.newPasswordConfirm,
      getValue: (value: string) => {
        form.newPasswordConfirm = value;
      },
    },
  ];

  return {
    inputs,
    form,
  };
};
