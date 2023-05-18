import { ISignin, ISigninErrors } from '@/interfaces/signin';
import Input from '@/components/UI/Input.vue';
import { useStoreProfile } from '@/stores/profile';
import { signinSchema } from '@/validation/signin.validation';

export const useSignin = () => {
  const form = reactive<ISignin>({
    email: '',
    password: '',
  });

  const errors = reactive<ISigninErrors>({
    email: '',
    password: '',
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
    {
      type: 'password',
      name: 'password',
      placeholder: '******',
      getValue: computed(() => form.password),
      setValue: (value: string) => {
        form.password = value;
      },
      component: Input,
      error: computed(() => errors.password),
    },
  ];

  const validate = async (field: keyof ISigninErrors) => {
    try {
      await signinSchema.validateAt(field, form);
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
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const { id, firstname, lastname, email } = await $fetch('/api/auth/signin', {
        method: 'post',
        body: form,
      });

      const auth = useAuth();
      auth.value.isAuthenticated = Boolean(id);

      if (auth.value.isAuthenticated) {
        const profile = {
          fullname: `${firstname} ${lastname}`,
          email,
          location: '',
          image: '',
          imageId: '',
        };
        storeProfile.addToProfile(profile);
        router.push('/profile');
      }

      form.email = '';
      form.password = '';
    } catch (error) {
      if (error instanceof Error) {
        errors.request = `Sorry! You don't have any account yet.`;
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
