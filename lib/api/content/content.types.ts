export interface IContentGetParameter {
  curPage: number;
  itemPerPage: number;
  movieTypeCd: string;
}

export interface IContent {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  prdtYear: string;
  openDt: string;
  typeNm: string;
  prdtStatNm: string;
  nationAlt: string;
  genreAlt: string;
  repNationNm: string;
  repGenreNm: string;
  directors: { peopleNm: string }[];
  companys: IContentCompany[];
}

export interface IContentCompany {
  companyCd: string;
  companyNm: string;
}
