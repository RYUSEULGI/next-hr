import { IPaginationResponse } from '@/lib/api/common.types';
import { useInfiniteQuery } from '@tanstack/react-query';

interface Props<T> {
  keepPreviousData?: boolean;
  enabled?: boolean;
  queryKey: string[];
  API: (pageParam: number) => Promise<IPaginationResponse<T[]>>;
}

const usePagingQuery = <T>({ enabled, queryKey, API }: Props<T>) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => API(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: IPaginationResponse<T[]>) => {
      return lastPage.isLast ? undefined : lastPage.page + 1;
    },
    enabled
  });

  const items = data && data.pages ? data.pages.flatMap((v) => v.items) : [];
  const loading = isLoading || isFetchingNextPage;
  const last = !hasNextPage;
  const total = data && data.pages ? data.pages[0]?.total ?? 0 : 0;
  const options = data && data.pages ? data.pages[0] : null;

  const onRefresh = () => {
    refetch();
  };

  return {
    items,
    loading,
    last,
    total,
    fetchNextPage,
    onRefresh,
    refreshing: isRefetching,
    options
  };
};

export default usePagingQuery;
