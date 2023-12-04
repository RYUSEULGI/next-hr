import { SERVER_ERROR_MESSAGE } from '@/constants';
import { IUser } from '@/interface/user';
import axios from 'axios';
import { RESPONSE_CODE } from '../response';

export const APIUserRegister = async (params: IUser): Promise<boolean> => {
  try {
    const res = await axios.post('/api/users', params);

    if (res.status === RESPONSE_CODE.OK && res.data) {
      return res.data.data;
    }

    return false;
  } catch (error) {
    alert(SERVER_ERROR_MESSAGE);
    return false;
  }

  //   const res = await postApi('/api/users', params);

  //   console.log('res', res);
  //   try {
  //     if (responseSuccess(res)) {
  //       return true;
  //     }

  //     alert(res.message);
  //     return false;
  //   } catch (error) {
  //     alert(SERVER_ERROR_MESSAGE);
  //     return false;
  //   }
};
