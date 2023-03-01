interface IProduct {
  id: string | number;
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
  id: string | number;
}

export interface IOrder {
  id: string | number;
  created_at: string;
  total: number;
  products: IProduct[];
  shipment: IShipment;
  user: IUser;
}

//From server
interface IFruit {
  id: number;
  name: string;
}

export interface IFromServerProducts extends IProduct {
  orderId: number;
}

export interface IServerOrder {
  order_id: number;
  price: number;
  quantity: number;
  fruits: IFruit;
  products?: IFromServerProducts[];
  orders: {
    id: number;
    customer_id: number;
    ship_fullname: string;
    ship_phone: string;
    ship_address: string;
    ship_city: string;
    ship_country: string;
    order_date: string;
  };
}
