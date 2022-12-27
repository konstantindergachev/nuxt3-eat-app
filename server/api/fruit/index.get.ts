import { fruits } from '@/stub/fruits';
import { IFruit } from '@/interfaces/fruits';

export default defineEventHandler((event): IFruit | string => {
  const query = getQuery(event);
  const findFruit = fruits.find((fruit) => fruit.id === query.fruitId);
  if (findFruit) return findFruit;
  else return 'Fruit not found!';
});
