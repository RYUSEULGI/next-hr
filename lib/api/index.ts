import { RESPONSE_CODE } from './response';

const BASE_URL =
  process?.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.BASE_URL;
console.log('🚀 ~ file: index.ts:4 ~ BASE_URL:', BASE_URL);

console.log('index BASE_URL', process.env.BASE_URL);
console.log('index NEXT_PUBLIC_BASE_URL', process.env.NEXT_PUBLIC_BASE_URL);

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
      next: { revalidate: 0 },
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
