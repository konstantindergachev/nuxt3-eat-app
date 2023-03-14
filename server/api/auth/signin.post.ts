import { signinService } from './service';
import { ISignin } from '@/interfaces/signin';

export default defineEventHandler(async (event) => {
  try {
    const body: ISignin = await readBody(event);

    const customer = await signinService(body.password);
    return { ...customer };
  } catch (error) {
    console.error(error);
  }
});
