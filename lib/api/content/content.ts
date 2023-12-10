import { SERVER_ERROR_MESSAGE } from '@/constants';

import { getApi } from '..';
import { responseSuccess } from '../response';
import { IContentGetParameter } from './content.types';

export const APIGetContentList = async (params: IContentGetParameter): Promise<boolean> => {
  try {
    const res = await getApi('/api/auth/signup', params);

    if (responseSuccess(res)) {
      return true;
    }

    alert(res.message);
    return false;
  } catch (error) {
    alert(SERVER_ERROR_MESSAGE);
    return false;
  }
};
