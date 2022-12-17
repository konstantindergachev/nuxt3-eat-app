interface IHours {
  weekend: string;
  casual: string;
}

export interface ILocation {
  city: string;
  address: string;
  phone: string;
  hours: IHours;
}
