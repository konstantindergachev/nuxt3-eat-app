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
    request: '',
  });

  const inputs = [
    {
      type: 'text',
      name: 'firstname',
      placeholder: 'Your firstname',
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
      placeholder: 'Your lastname',
      getValue: computed(() => form.lastname),
      setValue: (value: string) => {
        form.lastname = value;
      },
      component: Input,
      error: computed(() => errors.lastname),
    },
    {
      type: 'email',
      name: 'notificationEmail',
      placeholder: 'Notification email',
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
      placeholder: 'Notification phone number',
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
      placeholder: 'Notification address: The Test 1 Str.',
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
      placeholder: 'Delivery firstname',
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
      placeholder: 'Delivery lastname',
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
      placeholder: 'Delivery address: The Test 2 Str.',
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
      placeholder: 'Delivery country: Eng',
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
      placeholder: 'Delivery city: London',
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
      placeholder: 'Delivery postal code: 0000',
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

  const message = ref<string>('');
  let timeoutId = ref(0);

  const handleSubmit = async () => {
    const order: ICheckoutOrder = {
      info: form,
      basket: { products: products.value, total: totalPrice.value },
    };

    const response = await $fetch('/api/checkout', {
      method: 'post',
      body: order,
    });
    message.value = response;

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

    timeoutId.value = window.setTimeout(() => {
      message.value = '';
    }, 5000);
  };

  return {
    handleSubmit,
    inputs,
    validate,
    errors,
    message,
    products,
    totalPrice,
  };
};
