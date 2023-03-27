import { ICookieProp, ICookieOptions } from '@/interfaces/cookies';

export const useUtilities = () => {
  const moneyFormat = (locale: string, countryCurrency: string, money: number): string => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: countryCurrency }).format(
      money
    );
  };

  const dateFormat = (date: string): string => {
    const _date = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'America/New_York',
    }).format(_date);
  };

  const getCookieOptions = ({ isHttpOnly }: ICookieProp): ICookieOptions => {
    const date = new Date();
    date.setTime(date.getTime() + 1 * 1 * 60 * 60 * 1000);

    return {
      httpOnly: isHttpOnly,
      path: '/',
      expires: date,
    };
  };

  return {
    moneyFormat,
    dateFormat,
    getCookieOptions,
  };
};
