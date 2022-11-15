export interface IFruit {
  fruit:
    | {
        id: string;
        name: string;
        img: string;
        price: number;
        description: string;
        popular: number;
      }
    | undefined;
}

export interface IFruits {
  fruits: {
    id: string;
    name: string;
    img: string;
    price: number;
    description: string;
    popular: number;
  }[];
}
