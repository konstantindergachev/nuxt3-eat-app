export interface IFruit {
  id?: string;
  name?: string;
  img?: string;
  price?: number;
  description?: string;
  popular?: number;
}

export interface IBasket extends IFruit {
  count: number;
}
