interface IReturnRefundContent {
  paragraph: string[];
}

export interface IReturnRefund extends IReturnRefundContent {
  id: number;
  title: string;
}
