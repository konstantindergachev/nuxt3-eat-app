import { supabase } from '@/client';
import { ICheckoutOrder } from '@/interfaces/checkout';
import { IBasket } from '@/interfaces/fruits';

export const checkoutService = async (body: ICheckoutOrder, id: number): Promise<string> => {
  const { data: userData } = await supabase.from('customers').select('id').eq('id', id).single();
  if (!userData) {
    return `This customer doesn't exist!`;
  }

  const { data } = await supabase
    .from('orders')
    .insert([
      {
        customer_id: userData.id,
        ship_fullname: `${body.info.firstname} ${body.info.lastname}`,
        ship_phone: body.info.phone,
        ship_address: body.info.deliveryAddress,
        ship_city: body.info.deliveryCity,
        ship_country: body.info.deliveryCountry,
      },
    ])
    .select('id');

  const order = data && data[0];

  body.basket.products.forEach(async (product: IBasket) => {
    await supabase.from('order_details').insert([
      {
        order_id: order?.id,
        fruit_id: product.id,
        price: product.price,
        quantity: product.count,
      },
    ]);
  });

  return 'The order is successful created!';
};
