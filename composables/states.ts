export const useProducts = () =>
  useState(() => [
    {
      id: '1',
      name: 'apple',
      img: '/images/product1.png',
    },
    {
      id: '2',
      name: 'pear',
      img: '/images/product2.png',
    },
    {
      id: '3',
      name: 'product 3',
      img: '/images/product3.png',
    },
    {
      id: '4',
      name: 'product 4',
      img: '/images/product4.png',
    },
    {
      id: '5',
      name: 'mango',
      img: '/images/product5.png',
    },
    {
      id: '6',
      name: 'product 6',
      img: '/images/product6.png',
    },
    {
      id: '7',
      name: 'cherry',
      img: '/images/product7.png',
    },
    {
      id: '8',
      name: 'bluebarry',
      img: '/images/product8.png',
    },
    {
      id: '9',
      name: 'product 9',
      img: '/images/product9.png',
    },
    {
      id: '10',
      name: 'product 10',
      img: '/images/product10.png',
    },
    {
      id: '11',
      name: 'product 11',
      img: '/images/product11.png',
    },
    {
      id: '12',
      name: 'product 12',
      img: '/images/product12.png',
    },
  ]);

export const useCart = () => useState(() => []);
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));
