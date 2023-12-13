import { IGetPagingParameter } from '../common.types';

export enum ContentSortType {
  RANK = 'RANK',
  LIST = 'LIST'
}

export interface IContentGetParameter extends IGetPagingParameter {
  categoryId?: number;
}

export interface IContent {
  id: number;
  name: string;
}

export interface IContentCompany {
  companyCd: string;
  companyNm: string;
}

export interface IContentDetail extends IContent {
  nation: string;
  enName: string;
  directors: string;
  categoryId: number;
  year: number;
}

export interface IContentHome {
  type: ContentSortType;
  title: string;
  items: IContent[];
}
