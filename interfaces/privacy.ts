interface IPrivacyContent {
  paragraph: string[];
}

export interface IPrivacy extends IPrivacyContent {
  id: number;
  title: string;
}
