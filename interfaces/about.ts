export interface ISlide {
  slide:
    | {
        id: string;
        title: string;
        description: string;
        url: string;
      }
    | undefined;
}
export interface ISlides {
  slides: {
    id: string;
    title: string;
    description: string;
    url: string;
  }[];
}
