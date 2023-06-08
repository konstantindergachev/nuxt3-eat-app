import { db } from '@/server/db/clientDB';
import { ICheckoutOrder } from '@/interfaces/checkout';
import { IBasket } from '@/interfaces/fruits';
import { NOT_CUSTOMER, ORDER_CREATED } from '@/stub/constants';

export const checkoutService = async (body: ICheckoutOrder, id: number): Promise<string> => {
  const { data: userData } = await db.from('customers').select('id').eq('id', id).single();
  if (!userData) {
    return NOT_CUSTOMER;
  }

  const { data } = await db
    .from('orders')
    .insert([
      {
        customer_id: userData.id,
        ship_fullname: `${body.info.addresseeFirstname} ${body.info.addresseeLastname}`,
        ship_phone: body.info.phone,
        ship_address: body.info.deliveryAddress,
        ship_city: body.info.deliveryCity,
        ship_country: body.info.deliveryCountry,
      },
    ])
    .select('id');

  const order = data && data[0];

  body.basket.products.forEach(async (product: IBasket) => {
    await db.from('order_details').insert([
      {
        order_id: order?.id,
        fruit_id: product.id,
        price: product.price,
        quantity: product.count,
      },
    ]);
  });

  return ORDER_CREATED;
};
