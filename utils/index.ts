export const moneyFormat = (locale: string, countryCurrency: string, money: number): string => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: countryCurrency }).format(
    money
  );
};

export const setCookie = (key: string, value: string): void => {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 1 * 60 * 60 * 1000); // love it
  document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`;
};

export const removeCookie = (key: string): void => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};
