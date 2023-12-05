export enum LoginType {
  없음 = '',
  이메일 = 'email',
  구글 = 'google'
}

export interface IUser {
  username: string;
  name: string;
  address: string;
}
