import { IResponse, RESPONSE_CODE } from './response';

const BASE_URL =
  process?.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXTAUTH_URL;

// export const getApi = async <T>(url: string, params?: any): Promise<IResponse<T>> => {
//   try {
//     const res: AxiosResponse<IResponse<T>> = await API({
//       url: urlParser(url),
//       method: 'GET',
//       params
//     });

//     return res.data;
//   } catch (err) {
//     return errorCheck(err);
//   }
// };

export async function getApi(url: string, data?: any) {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, {
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
}

export async function postApi(url: string, data?: any) {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, {
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
}
