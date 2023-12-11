import { SERVER_ERROR_MESSAGE } from '@/constants';
import { getApi } from '..';
import { responseSuccess } from '../response';
import { IContentCategory } from './content.category.types';

export async function APIGetContentCategory(): Promise<IContentCategory[]> {
  try {
    const res = await getApi('/api/content/category');
    if (responseSuccess(res)) {
      return res.data;
    }
    return [];
  } catch (error) {
    throw Error(SERVER_ERROR_MESSAGE);
  }
}
