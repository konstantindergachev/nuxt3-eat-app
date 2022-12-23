export interface IDelivery {
  title?: string;
  description?: string;
  rules?: {
    id: string;
    title: string;
    description: string;
  }[];
}
