import { fruits } from '../../stub/fruits';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const findFruit = fruits.find((fruit) => fruit.id === query.fruitId);
  return { fruit: findFruit };
});
