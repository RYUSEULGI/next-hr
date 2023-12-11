import { IGetPagingParameter } from '../common.types';

export interface IContentGetParameter extends IGetPagingParameter {
  categoryId?: number;
}

export interface IContent {
  id: number;
  name: string;
  year: number;
}

export interface IContentCompany {
  companyCd: string;
  companyNm: string;
}
