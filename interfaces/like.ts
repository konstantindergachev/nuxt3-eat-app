export interface IPiniaLikeInfo {
  [postId: string]: boolean;
}

export interface ILikeInfo {
  isLiked: boolean;
  postId: number;
}

export interface ILikeResponseFromDB {
  post_id: number;
  is_liked: boolean;
}

export interface ILikeResponseErrorFromDB {
  error: string;
}
