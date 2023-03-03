import { ISignup, ISignupResponse } from '@/interfaces/signup';
import { signupService } from './service';

export default defineEventHandler(async (event): Promise<ISignupResponse> => {
  const body: ISignup = await readBody(event);

  const response = await signupService(body);
  return response;
});
