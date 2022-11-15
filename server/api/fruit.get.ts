import { fruits } from '../../stub/fruits';
import { IFruit } from '../../interfaces/fruits';

export default defineEventHandler((event): IFruit => {
  const query = getQuery(event);
  const findFruit = fruits.find((fruit) => fruit.id === query.fruitId);
  return { fruit: findFruit };
});
