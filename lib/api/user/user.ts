import { SERVER_ERROR_MESSAGE } from '@/constants';
import { IUser } from '@/interface/user';
import { postApi } from '..';

export const APIUserRegister = async (params: IUser): Promise<boolean> => {
  try {
    const res = await postApi('/api/auth/register', params);

    if (res) {
      return res.data.data;
    }

    alert(res.message);
    return false;
  } catch (error) {
    alert(SERVER_ERROR_MESSAGE);
    return false;
  }
};
