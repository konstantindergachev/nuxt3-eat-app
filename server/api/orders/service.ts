import { supabase } from '@/client';
import { PostgrestResponse } from '@supabase/supabase-js';
import { IOrder, IRawOrder, IOrderDetails } from '@/interfaces/orders';

export const orderService = async (id: number): Promise<IOrder[] | string> => {
  const rawOrder: PostgrestResponse<IRawOrder> = await supabase
    .from('orders')
    .select(`*, order_details(*, fruits(name))`)
    .eq('customer_id', id);

  if (!rawOrder.data) {
    throw new Error(`Sorry! You don't have any orders yet.`);
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
