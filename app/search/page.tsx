import { APIGetContentList } from '@/lib/api/content/content';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function SearchPage() {
  //   const fetchList = ({ pageParam = 1 }) => {
  //     return APIGetContentList({
  //       curPage: pageParam,
  //       itemPerPage: 12,
  //       movieTypeCd: '전체'
  //     });
  //   };

  //   const { data: user } = useInfiniteQuery({
  //     queryKey: ['get-list'],
  //     queryFn: ({ pageParam }) => fetchList(pageParam),
  //     initialPageParam: 1,
  //     getNextPageParam: (lastPage) => {
  //       if (!lastPage) {
  //         return 1;
  //       }
  //       return 1;
  //       //   return lastPage.valueOf() + 1;
  //     }
  //   });

  return <div></div>;
}
