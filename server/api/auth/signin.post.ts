import { signinService } from './service';
import { ISignin } from '@/interfaces/signin';
import { ICookieOptions } from '@/interfaces/cookies';
import { getCookieOptions } from '@/utils';

export default defineEventHandler(async (event) => {
  try {
    const body: ISignin = await readBody(event);

    const customer = await signinService(body.password);

    const date = new Date();
    date.setTime(date.getTime() + 60 * 1000);

    const httpOnlyCookie: ICookieOptions = getCookieOptions({ isHttpOnly: true });
    const globalCookie: ICookieOptions = getCookieOptions({ isHttpOnly: false });
    setCookie(event, 'id', customer.id.toString(), httpOnlyCookie);
    setCookie(event, 'auth', 'true', globalCookie);

    return { ...customer };
  } catch (error) {
    console.error(error);
  }
});
