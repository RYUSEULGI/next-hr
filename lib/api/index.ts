import { RESPONSE_CODE } from './response';

export const getApi = async (url: string, data?: any) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.status === RESPONSE_CODE.OK) {
      return await res.json();
    } else {
      console.error('Error:', res.status, res.statusText);
    }
  } catch (error) {
    console.error('Exception:', error);
  }
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
      return await res.json();
    } else {
      console.error('Error:', res.status, res.statusText);
    }
  } catch (error) {
    console.error('Exception:', error);
  }
};
