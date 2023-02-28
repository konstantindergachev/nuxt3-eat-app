import { IOrder } from '@/interfaces/orders';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IOrder[]> => {
  const _order = await supabase
    .from('order_details')
    .select(`order_id, price, quantity, fruits(id, name), orders(*)`);

  const products = getProductsFromRawOrder(_order.data);
  const orders = getOrders(_order.data, products);
  return response(orders);
});

const getProductsFromRawOrder = (rawOrder: any) => {
  return rawOrder.map((item: any) => {
    return {
      id: item.fruits.id,
      title: item.fruits.name,
      price: item.price,
      count: item.quantity,
      orderId: item.order_id,
    };
  });
};

const getOrders = (rawOrder: any, products: any) => {
  const _rawOrder = rawOrder.reduce((obj: any, curr: any) => {
    curr.fruits = products.filter((product: any) => {
      if (product.orderId === curr.order_id) {
        return product;
      }
    });
    obj[`${curr.order_id}`] = curr;
    return obj;
  }, []);

  return Object.values(_rawOrder);
};

const response = (rawOrder: any) => {
  return rawOrder.map((item: any) => {
    return {
      id: item.order_id,
      created_at: item.orders.order_date,
      total: item.fruits.reduce((acc: any, curr: any) => {
        return (acc += curr.price * curr.count);
      }, 0),
      products: item.fruits,
      shipment: {
        fullname: item.orders.ship_fullname,
        phone: item.orders.ship_phone,
        country: item.orders.ship_country,
        city: item.orders.ship_city,
        address: item.orders.ship_address,
      },
      user: { id: item.orders.customer_id },
    };
  });
};
