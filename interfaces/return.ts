interface IReturnRefundContent {
  paragraph: string[];
}

export interface IReturnRefund extends IReturnRefundContent {
  id: string;
  title: string;
}
