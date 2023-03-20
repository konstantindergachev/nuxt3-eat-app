import { supabase } from '@/client';
import { IUpdateProfile, IUpdateProfileDBResponse } from '@/interfaces/profile';

export const profileService = async (
  profile: IUpdateProfile,
  customerId: number
): Promise<IUpdateProfileDBResponse> => {
  const profilePromise = createProfile(customerId, profile.location);
  const customerPromise = updateCustomer(customerId, profile);

  const [profileResponse, customerResponse] = await Promise.all([profilePromise, customerPromise]);

  return { profileResponse, customerResponse };
};

const createProfile = async (
  customerId: number,
  location: string
): Promise<{ status: number; statusText: string }> => {
  const [city, country] = location.split(',');
  const dbResponse = await supabase.from('profiles').insert([
    {
      customer_id: customerId,
      city: city.trim(),
      country: country.trim(),
    },
  ]);

  return { status: dbResponse.status, statusText: dbResponse.statusText };
};

const updateCustomer = async (
  customerId: number,
  profile: IUpdateProfile
): Promise<{ status: number; statusText: string }> => {
  const [firstname, lastname] = profile.fullname.split(' ');
  const customer = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    email: profile.email,
    password: profile.newPassword,
    password_confirm: profile.newPasswordConfirm,
    updated_at: new Date(),
  };
  const dbResponse = await supabase
    .from('customers')
    .update({ ...customer })
    .eq('id', customerId);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};
