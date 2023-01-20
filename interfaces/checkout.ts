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

interface ICheckoutProduct {
  id?: string;
  name?: string;
  count: number;
  price?: number;
  popular?: number;
}

interface ICheckoutBasket {
  products: ICheckoutProduct[];
  total: number;
}

export interface ICheckoutOrder {
  info: ICheckoutForm;
  basket: ICheckoutBasket;
}
