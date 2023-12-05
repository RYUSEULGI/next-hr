import { SERVER_ERROR_MESSAGE } from '@/constants';

import { postApi } from '..';
import { responseSuccess } from '../response';
import { IUser } from './user.types';

export const APIUserRegister = async (params: IUser): Promise<boolean> => {
  try {
    const res = await postApi('/api/auth/signup', params);

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
