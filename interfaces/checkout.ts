export interface ICheckoutForm {
  firstname: string;
  lastname: string;
  notificationEmail: string;
  phone: string;
  address: string;
  addresseeFirstname: string;
  addresseeLastname: string;
  deliveryAddress: string;
  deliveryCountry: string;
  deliveryCity: string;
  deliveryPostalCode: string;
}

export interface ICheckoutProduct {
  id: number;
  name: string;
  count: number;
  price: number;
  popular: boolean;
}

interface ICheckoutBasket {
  products: ICheckoutProduct[];
  total: number;
}

export interface ICheckoutOrder {
  info: ICheckoutForm;
  basket: ICheckoutBasket;
}
