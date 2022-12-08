export const moneyFormat = (locale: string, countryCurrency: string, money: number): string => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: countryCurrency }).format(
    money
  );
};
