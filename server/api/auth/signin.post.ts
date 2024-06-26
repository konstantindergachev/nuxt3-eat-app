import { signinService } from './service';
import { ISignin } from '~~/interfaces/signin';
import { ICookieOptions } from '~~/interfaces/cookies';
import { useUtilities } from '~~/composables/useUtilities';

export default defineEventHandler(async (event) => {
  try {
    const body: ISignin = await readBody(event);

    const customer = await signinService(body.password);

    const { getCookieOptions } = useUtilities();
    const httpOnlyCookie: ICookieOptions = getCookieOptions({ isHttpOnly: true });
    const globalCookie: ICookieOptions = getCookieOptions({ isHttpOnly: false });
    setCookie(event, 'id', customer.id.toString(), httpOnlyCookie);
    setCookie(event, 'auth', 'true', globalCookie);

    return { ...customer };
  } catch (error) {
    console.error(error);
  }
});
