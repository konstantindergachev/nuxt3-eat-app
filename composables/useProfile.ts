import { IUpdateProfile, IUpdateProfileErrors, IReceiveProfileFromDB } from '@/interfaces/profile';
import Input from '@/components/UI/Input.vue';
import { useStoreProfile } from '@/stores/profile';
import { updateProfileSchema } from '@/validation/updateprofile.validation';

export const useProfile = async () => {
  const { data } = await useFetch<IReceiveProfileFromDB>('/api/profile');
  const form = reactive<IUpdateProfile>({
    fullname: '',
    email: '',
    location: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  if (typeof data.value !== 'string') {
    form.fullname = `${data.value?.customers.firstname} ${data.value?.customers.lastname}`;
    form.email = data.value?.customers.email!;
    form.location = `${data.value?.city}, ${data.value?.country}`;
  }

  const errors = reactive<IUpdateProfileErrors>({
    fullname: '',
    email: '',
    location: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
    request: '',
  });

  if (typeof data.value === 'string') {
    errors.request = data.value;
  }

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
    {
      type: 'text',
      name: 'location',
      placeholder: 'City, Country',
      getValue: computed(() => form.location),
      setValue: (value: string) => {
        form.location = value;
      },
      component: Input,
      error: computed(() => errors.location),
    },
    {
      type: 'password',
      name: 'oldPassword',
      placeholder: '******',
      getValue: computed(() => form.oldPassword),
      setValue: (value: string) => {
        form.oldPassword = value;
      },
      component: Input,
      error: computed(() => errors.oldPassword),
    },
    {
      type: 'password',
      name: 'newPassword',
      placeholder: '******',
      getValue: computed(() => form.newPassword),
      setValue: (value: string) => {
        form.newPassword = value;
      },
      component: Input,
      error: computed(() => errors.newPassword),
    },
    {
      type: 'password',
      name: 'newPasswordConfirm',
      placeholder: '******',
      getValue: computed(() => form.newPasswordConfirm),
      setValue: (value: string) => {
        form.newPasswordConfirm = value;
      },
      component: Input,
      error: computed(() => errors.newPasswordConfirm),
    },
  ];

  const validate = async (field: keyof IUpdateProfileErrors) => {
    try {
      await updateProfileSchema.validateAt(field, form);
      errors[field] = '';
    } catch (error) {
      if (error instanceof Error) {
        errors[field] = error.message;
      } else {
        errors[field] = 'Unexpected error';
      }
    }
  };

  const storeProfile = useStoreProfile();
  const profile = computed(() => storeProfile.getProfile);

  const handleSubmit = async () => {
    try {
      await $fetch('/api/profile', {
        method: 'post',
        body: form,
      });

      form.oldPassword = '******';
      form.newPassword = '******';
      form.newPasswordConfirm = '******';
      storeProfile.addToProfile(form);

      form.fullname = profile.value.fullname;
      form.email = profile.value.email;
      form.location = profile.value.location;
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
