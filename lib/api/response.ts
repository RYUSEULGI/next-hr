export enum RESPONSE_CODE {
  OK = 200,
  BAD_PARAMETER = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 403,
  SERVER_ERROR = 500,
  SOCIAL_USER_DUPLICATE = 1001
}

export interface IResponse<T> {
  code: number;
  message: string;
  data: T;
}

export const responseSuccess = (res: IResponse<any>): boolean => {
  if (res && res.code === RESPONSE_CODE.OK) {
    return true;
  }

  return false;
};
