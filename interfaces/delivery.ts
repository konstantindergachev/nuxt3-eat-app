interface IRules {
  id: string;
  title: string;
  description: string;
  created_at?: string;
}

export interface IDelivery {
  title?: string;
  description?: string;
  created_at?: string;
  rules?: IRules[];
}
