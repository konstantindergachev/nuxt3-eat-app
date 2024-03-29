import { orderService } from './service';
import { IOrder } from '~~/interfaces/orders';
import { SOMETHING_WENT_WRONT } from '~~/stub/constants';

export default defineEventHandler(async (event): Promise<IOrder[] | string> => {
  let id = getCookie(event, 'id');
  id = !id ? '1' : id; //FIXME   Delete this string
  try {
    return await orderService(Number(id));
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return SOMETHING_WENT_WRONT;
    }
  }
});
