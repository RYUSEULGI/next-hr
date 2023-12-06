export enum LoginType {
  없음 = '',
  이메일 = 'email',
  구글 = 'google'
}

export interface IUser {
  email: string;
  name: string;
  address: string;
}
