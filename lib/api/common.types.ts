export interface IGetPagingParameter {
  page: number;
  size?: number;
  order?: 'desc' | 'asc';
}

export interface IPagination {
  total: number;
  size: number;
  page: number;
  isLast?: boolean;
  isFirst?: boolean;
}

export interface IPaginationResponse<T> extends IPagination {
  items: T;
}
