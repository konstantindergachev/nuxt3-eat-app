import { ISignup, ISignupErrors } from '@/interfaces/signup';
import Input from '@/components/UI/Input.vue';
import { signupSchema } from '@/validation/signup.validation';
import { UNEXPECTED } from '@/stub/constants';

export const useSignup = () => {
  const form = reactive<ISignup>({
    fullname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const errors = reactive<ISignupErrors>({
    fullname: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
    {
      type: 'password',
      name: 'passwordConfirm',
      placeholder: '******',
      getValue: computed(() => form.passwordConfirm),
      setValue: (value: string) => {
        form.passwordConfirm = value;
      },
      component: Input,
      error: computed(() => errors.passwordConfirm),
    },
  ];

  const validate = async (field: keyof ISignupErrors) => {
    try {
      await signupSchema.validateAt(field, form);
      errors[field] = '';
    } catch (error) {
      if (error instanceof Error) {
        errors[field] = error.message;
      } else {
        errors[field] = UNEXPECTED;
      }
    }
  };

  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = async () => {
    await $fetch('/api/auth/signup', {
      method: 'post',
      body: form,
    });

    auth.value.isAuthenticated = true;
    router.push('/profile');

    form.fullname = '';
    form.email = '';
    form.password = '';
    form.passwordConfirm = '';
  };

  return {
    handleSubmit,
    inputs,
    validate,
    errors,
  };
};
