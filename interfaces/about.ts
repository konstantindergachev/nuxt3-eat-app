interface IItem {
  id: string;
  url: string;
  name: string;
  title: string;
  description: string;
}

interface IList {
  list: IItem[];
}

export interface IAbout extends IList {
  title: string;
  description: string;
}
