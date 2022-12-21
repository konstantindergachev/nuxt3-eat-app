interface IImage {
  url: string;
  title: string;
}

export interface IBanner {
  title?: string;
  subtitle?: string;
  description?: string;
  img?: IImage;
}
