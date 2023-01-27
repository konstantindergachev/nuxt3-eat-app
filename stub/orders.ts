export const orders = [
  {
    id: '1',
    created_at: new Date().toISOString(),
    total: 49,
    products: [
      {
        id: '1',
        title: 'apple',
        price: 8,
        count: 2,
      },
      {
        id: '2',
        title: 'plum',
        price: 11,
        count: 3,
      },
    ],
    shipment: {
      fullname: 'Tomas Magnum',
      phone: '+38(066) 724 5234',
      country: 'USA',
      city: 'LA, CA',
      address: 'The Sunset, 12 Ave.',
    },
    user: { id: '3' },
  },
  {
    id: '2',
    created_at: new Date().toISOString(),
    total: 46,
    products: [
      {
        id: '1',
        title: 'apple',
        price: 8,
        count: 3,
      },
      {
        id: '2',
        title: 'plum',
        price: 11,
        count: 2,
      },
    ],
    shipment: {
      fullname: 'Bob Hoskings',
      phone: '+38(097) 104 0234',
      country: 'England',
      city: 'London',
      address: 'The Tower Bridge, 65 Ave.',
    },
    user: { id: '3' },
  },
];
