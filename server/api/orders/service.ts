import { db } from '@/server/db/clientDB';
import { PostgrestResponse } from '@supabase/supabase-js';
import { IOrder, IRawOrder, IOrderDetails } from '@/interfaces/orders';
import { NOT_ORDER, SOMETHING_WENT_WRONT } from '@/stub/constants';

export const orderService = async (id: number): Promise<IOrder[] | string> => {
  const rawOrder: PostgrestResponse<IRawOrder> = await db
    .from('orders')
    .select(`*, order_details(*, fruits(name))`)
    .eq('customer_id', id);

  if (rawOrder.error) {
    throw new Error(SOMETHING_WENT_WRONT);
  }
  if (!rawOrder.data.length) {
    throw new Error(NOT_ORDER);
  }
  return orderCreator(rawOrder.data);
};

const orderCreator = (rawOrder: IRawOrder[]): IOrder[] => {
  return rawOrder.map((item: IRawOrder) => {
    const shipment = {
      fullname: item.ship_fullname,
      phone: item.ship_phone,
      country: item.ship_country,
      city: item.ship_city,
      address: item.ship_address,
    };

    const user = { id: item.customer_id };

    const total = item.order_details.reduce((acc: number, curr: IOrderDetails) => {
      return (acc += curr.price * curr.quantity);
    }, 0);

    const products = item.order_details.map((product: IOrderDetails) => {
      return {
        id: product.order_id,
        title: product.fruits.name,
        price: product.price,
        count: product.quantity,
      };
    });

    const order = {
      id: item.id,
      created_at: item.order_date,
      total,
      products,
      shipment,
      user,
    };

    return order;
  });
};
