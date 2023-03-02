import { supabase } from '@/client';
import { PostgrestResponse } from '@supabase/supabase-js';
import { IOrder, IRawOrder, IModifyProducts } from '@/interfaces/orders';

export const orderService = async (): Promise<IOrder[] | string> => {
  const rawOrder: PostgrestResponse<IRawOrder> = await supabase
    .from('order_details')
    .select(`order_id, price, quantity, fruits(id, name), orders(*)`);

  if (!rawOrder.data) {
    throw new Error(`Sorry! You don't have any orders yet.`);
  }

  const products = pickOutProductsFromRawOrder(rawOrder.data);
  const order = modifyOrder(rawOrder.data, products);
  return getReport(order) as IOrder[];
};

const pickOutProductsFromRawOrder = (rawOrder: IRawOrder[]): IModifyProducts[] => {
  return rawOrder.map((item: IRawOrder) => {
    return {
      id: item.fruits.id,
      title: item.fruits.name,
      price: item.price,
      count: item.quantity,
      orderId: item.order_id,
    };
  });
};

const modifyOrder = (rawOrder: IRawOrder[], products: IModifyProducts[]): IRawOrder[] => {
  const mutatedOrder = rawOrder.reduce((finalObj: any, currentObj: IRawOrder) => {
    //mutate current object by products property adding
    currentObj.products = products.filter((product) => {
      if (product.orderId === currentObj.order_id) {
        return product;
      }
    }) as IModifyProducts[];

    //remove three props from currentObj
    const { fruits, price, quantity, ..._currentObj } = currentObj;
    finalObj[`${currentObj.order_id}`] = _currentObj;
    return finalObj;
  }, {});

  //Create array of object values
  return Object.values(mutatedOrder);
};

const getReport = (orders: IRawOrder[]) => {
  return orders.map((item) => {
    if (Array.isArray(item.products)) {
      return {
        id: item.order_id,
        created_at: item.orders.order_date,
        total: item.products.reduce((acc: any, curr: IModifyProducts) => {
          return (acc += curr.count * curr.count);
        }, 0),
        products: item.products,
        shipment: {
          fullname: item.orders.ship_fullname,
          phone: item.orders.ship_phone,
          country: item.orders.ship_country,
          city: item.orders.ship_city,
          address: item.orders.ship_address,
        },
        user: { id: item.orders.customer_id },
      };
    }
  });
};
