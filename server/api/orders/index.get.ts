import { IOrder, IServerOrder, IFromServerProducts } from '@/interfaces/orders';
import { supabase } from '@/client';
import { PostgrestResponse } from '@supabase/supabase-js';

export default defineEventHandler(async (event): Promise<IOrder[] | string> => {
  const _order: PostgrestResponse<IServerOrder> = await supabase
    .from('order_details')
    .select(`order_id, price, quantity, fruits(id, name), orders(*)`);

  if (_order.data) {
    const products = getProductsFromServerOrder(_order.data);
    const orders = getOrdersWithProducts(_order.data, products);
    return orderResponse(orders) as IOrder[];
  }
  return `Sorry! You don't have any orders yet.`;
});

const getProductsFromServerOrder = (orderFromServer: IServerOrder[]): IFromServerProducts[] => {
  return orderFromServer.map((item: IServerOrder) => {
    return {
      id: item.fruits.id,
      title: item.fruits.name,
      price: item.price,
      count: item.quantity,
      orderId: item.order_id,
    };
  });
};

const getOrdersWithProducts = (
  orderFromServer: IServerOrder[],
  products: IFromServerProducts[]
): IServerOrder[] => {
  const _orderFromServer = orderFromServer.reduce((finalObj: any, currentObj: IServerOrder) => {
    //mutate current object by products property adding
    currentObj.products = products.filter((product) => {
      if (product.orderId === currentObj.order_id) {
        return product;
      }
    }) as IFromServerProducts[];
    const { fruits, price, quantity, ..._currentObj } = currentObj; //remove three props from currentObj
    finalObj[`${currentObj.order_id}`] = _currentObj;
    return finalObj;
  }, {});

  //Create array of object values
  return Object.values(_orderFromServer);
};

const orderResponse = (orders: IServerOrder[]) => {
  return orders.map((item) => {
    if (Array.isArray(item.products)) {
      return {
        id: item.order_id,
        created_at: item.orders.order_date,
        total: item.products.reduce((acc: any, curr: any) => {
          return (acc += curr.price * curr.count);
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
