export interface ISlide {
  id: number;
  title: string;
  description: string;
  url: string;
  created_at: string;
}

export interface IReview {
  fullname: string;
  title: string;
  text: string;
}

export interface IReviewResponse {
  status: number;
  statusText: string;
}

export interface IReviewErrors {
  fullname: string;
  title: string;
  text: string;
  request: string;
}
