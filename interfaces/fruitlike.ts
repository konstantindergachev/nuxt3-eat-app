export interface IFruitLikeStore {
  [fruitId: string]: boolean;
}

export interface IFruitLike {
  isLiked: boolean;
  fruitId: number;
}

export interface IFruitLikeResponse {
  fruit_id: number;
  is_liked: boolean;
}

export interface IFruitLikeResponseError {
  error: string;
}
