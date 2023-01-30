export interface IFruit {
  id?: number;
  name?: string;
  img?: string;
  price?: number;
  description?: string;
  popular?: boolean;
  created_at?: string;
}

export interface IBasket extends IFruit {
  count: number;
}
