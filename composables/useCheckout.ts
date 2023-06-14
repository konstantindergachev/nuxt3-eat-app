import {
  ICheckoutForm,
  ICheckoutErrors,
  ICheckoutOrder,
  ICheckoutProduct,
} from '~~/interfaces/checkout';
import Input from '~~/components/UI/Input.vue';
import { checkoutSchema } from '~~/validation/checkout.validation';
import { useStoreBasket } from '~~/stores/basket';
import { UNEXPECTED } from '~~/stub/constants';

export const useCheckout = () => {
  const storeBasket = useStoreBasket();
  const products = computed(() => {
    return storeBasket.getBasketFruits.map((fruit) => ({
      id: fruit.id,
      name: fruit.name,
      count: fruit.count,
      price: fruit.price,
      popular: fruit.popular,
    })) as ICheckoutProduct[];
  });

  const totalPrice = computed(() => storeBasket.getBasketFruitsTotalPrice);

  const form = reactive<ICheckoutForm>({
    firstname: '',
    lastname: '',
    notificationEmail: '',
    phone: '',
    address: '',
    addresseeFirstname: '',
    addresseeLastname: '',
    deliveryAddress: '',
    deliveryCountry: '',
    deliveryCity: '',
    deliveryPostalCode: '',
  });
  const errors = reactive<ICheckoutErrors>({
    firstname: '',
    lastname: '',
    notificationEmail: '',
    phone: '',
    address: '',
    addresseeFirstname: '',
    addresseeLastname: '',
    deliveryAddress: '',
    deliveryCountry: '',
    deliveryCity: '',
    deliveryPostalCode: '',
  });

  const inputs = [
    {
      type: 'text',
      name: 'firstname',
      placeholder: 'John',
      getValue: computed(() => form.firstname),
      setValue: (value: string) => {
        form.firstname = value;
      },
      component: Input,
      error: computed(() => errors.firstname),
    },
    {
      type: 'text',
      name: 'lastname',
      placeholder: 'Doe',
      getValue: computed(() => form.addresseeLastname),
      setValue: (value: string) => {
        form.lastname = value;
      },
      component: Input,
      error: computed(() => errors.lastname),
    },
    {
      type: 'email',
      name: 'notificationEmail',
      placeholder: 'test@test.com',
      getValue: computed(() => form.notificationEmail),
      setValue: (value: string) => {
        form.notificationEmail = value;
      },
      component: Input,
      error: computed(() => errors.notificationEmail),
    },
    {
      type: 'text',
      name: 'phone',
      placeholder: '011 222 3344',
      getValue: computed(() => form.phone),
      setValue: (value: string) => {
        form.phone = value;
      },
      component: Input,
      error: computed(() => errors.phone),
    },
    {
      type: 'text',
      name: 'address',
      placeholder: 'The Test 1 Str.',
      getValue: computed(() => form.address),
      setValue: (value: string) => {
        form.address = value;
      },
      component: Input,
      error: computed(() => errors.address),
    },
    {
      type: 'text',
      name: 'addresseeFirstname',
      placeholder: 'Jill',
      getValue: computed(() => form.addresseeFirstname),
      setValue: (value: string) => {
        form.addresseeFirstname = value;
      },
      component: Input,
      error: computed(() => errors.addresseeFirstname),
    },
    {
      type: 'text',
      name: 'addresseeLastname',
      placeholder: 'Doe',
      getValue: computed(() => form.addresseeLastname),
      setValue: (value: string) => {
        form.addresseeLastname = value;
      },
      component: Input,
      error: computed(() => errors.addresseeLastname),
    },
    {
      type: 'text',
      name: 'deliveryAddress',
      placeholder: 'The Test 2 Str.',
      getValue: computed(() => form.deliveryAddress),
      setValue: (value: string) => {
        form.deliveryAddress = value;
      },
      component: Input,
      error: computed(() => errors.deliveryAddress),
    },
    {
      type: 'text',
      name: 'deliveryCountry',
      placeholder: 'Eng',
      getValue: computed(() => form.deliveryCountry),
      setValue: (value: string) => {
        form.deliveryCountry = value;
      },
      component: Input,
      error: computed(() => errors.deliveryCountry),
    },
    {
      type: 'text',
      name: 'deliveryCity',
      placeholder: 'London',
      getValue: computed(() => form.deliveryCity),
      setValue: (value: string) => {
        form.deliveryCity = value;
      },
      component: Input,
      error: computed(() => errors.deliveryCity),
    },
    {
      type: 'text',
      name: 'deliveryPostalCode',
      placeholder: '0000',
      getValue: computed(() => form.deliveryPostalCode),
      setValue: (value: string) => {
        form.deliveryPostalCode = value;
      },
      component: Input,
      error: computed(() => errors.deliveryPostalCode),
    },
  ];

  const validate = async (field: keyof ICheckoutErrors) => {
    try {
      await checkoutSchema.validateAt(field, form);
      errors[field] = '';
    } catch (error) {
      if (error instanceof Error) {
        errors[field] = error.message;
      } else {
        errors[field] = UNEXPECTED;
      }
    }
  };

  const handleSubmit = async () => {
    const order: ICheckoutOrder = {
      info: form,
      basket: { products: products.value, total: totalPrice.value },
    };

    await $fetch('/api/checkout', {
      method: 'post',
      body: order,
    });

    form.firstname = '';
    form.lastname = '';
    form.notificationEmail = '';
    form.phone = '';
    form.address = '';
    form.addresseeFirstname = '';
    form.addresseeLastname = '';
    form.deliveryAddress = '';
    form.deliveryCountry = '';
    form.deliveryCity = '';
    form.deliveryPostalCode = '';
  };

  return {
    handleSubmit,
    inputs,
    validate,
    errors,
    products,
    totalPrice,
  };
};
