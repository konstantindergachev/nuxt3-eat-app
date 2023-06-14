import { db } from '~~/server/db/clientDB';
import { IFruit } from '~~/interfaces/fruits';

export const fruitsService = async (fruitsLength: number): Promise<IFruit[]> => {
  const offset = 0;
  const limit = fruitsLength ? fruitsLength : 3;
  const from = fruitsLength ? fruitsLength : offset;
  const to = fruitsLength ? from + fruitsLength - 1 : limit;

  const { data } = await db
    .from('fruits')
    .select()
    .order('id', { ascending: true })
    .range(from, to);

  return data as IFruit[];
};

export const topFruitsService = async (): Promise<IFruit[]> => {
  const { data } = await db.from('fruits').select().order('popular', { ascending: false }).limit(3);

  return data as IFruit[];
};
