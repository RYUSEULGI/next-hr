import { RESPONSE_CODE } from './response';

const errorCheck = (err: any) => {
  if (!err || !err.response) {
    return null;
  }
  if (err.response.status && (err.response.status === 403 || err.response.status === 401)) {
    return err.response.data;
  }
  return err.response.data;
};

export const postApi = async (url: string, data?: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.status === RESPONSE_CODE.OK) {
      console.log(res);
      return res.body;
    } else {
      return null;
    }
  } catch (err) {
    return errorCheck(err);
  }
};
