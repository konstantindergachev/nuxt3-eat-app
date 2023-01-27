interface IProduct {
  id: string;
  title: string;
  price: number;
  count: number;
}

interface IShipment {
  fullname: string;
  phone: string;
  country: string;
  city: string;
  address: string;
}

interface IUser {
  id: string;
}

export interface IOrder {
  id: string;
  created_at: string;
  total: number;
  products: IProduct[];
  shipment: IShipment;
  user: IUser;
}
