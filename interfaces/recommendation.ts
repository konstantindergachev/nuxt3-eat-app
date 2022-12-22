interface IImage {
  url: string;
  title: string;
}

interface ICharacteristic {
  id: number;
  value: string;
  name: string;
}

export interface IRecommendation {
  title?: string;
  titleImg?: IImage;
  description?: string;
  img?: IImage;
  characteristic?: ICharacteristic[];
}
