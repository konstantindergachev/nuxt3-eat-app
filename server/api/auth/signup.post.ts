import { signupService } from './service';
import { ISignup } from '@/interfaces/signup';
import { ICookieOptions } from '@/interfaces/cookies';
import { useUtilities } from '@/composables/useUtilities';

export default defineEventHandler(async (event) => {
  try {
    const body: ISignup = await readBody(event);

    const customer = await signupService(body);

    const date = new Date();
    date.setTime(date.getTime() + 60 * 1000);

    const { getCookieOptions } = useUtilities();
    const httpOnlyCookie: ICookieOptions = getCookieOptions({ isHttpOnly: true });
    const globalCookie: ICookieOptions = getCookieOptions({ isHttpOnly: false });
    setCookie(event, 'id', customer.id.toString(), httpOnlyCookie);
    setCookie(event, 'auth', 'true', globalCookie);

    return { ...customer };
  } catch (error) {
    console.error({ error });
  }
});
