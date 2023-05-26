export interface IPostLikeStore {
  [postId: string]: boolean;
}

export interface IPostLike {
  isLiked: boolean;
  postId: number;
}

export interface IPostLikeResponse {
  post_id: number;
  is_liked: boolean;
}

export interface IPostLikeResponseError {
  error: string;
}
