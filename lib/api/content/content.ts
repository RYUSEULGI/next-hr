import { SERVER_ERROR_MESSAGE } from '@/constants';

import { postApi } from '..';
import { IPaginationResponse } from '../common.types';
import { responseSuccess } from '../response';
import { IContent, IContentGetParameter } from './content.types';

export const APIGetContentList = async (
  params: IContentGetParameter
): Promise<IPaginationResponse<IContent[]>> => {
  try {
    const res = await postApi('/api/content/list', {
      ...params,
      size: 10
    });

    if (responseSuccess(res)) {
      return res.data;
    }

    throw Error(res.message);
  } catch (error) {
    throw Error(SERVER_ERROR_MESSAGE);
  }
};
