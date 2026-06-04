import { useInfiniteQuery } from '@tanstack/react-query'

import type { Category } from '@/types/category';
import { QUERY_KEYS } from '@/constants/queryKeys'
import { getAreas } from '@/services/getAreas'

export const useGetAreas = (category: Category, code: string) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.areas(code),
    queryFn: async ({ pageParam }: { pageParam: string }) => getAreas(code, pageParam),
    initialPageParam: '1',
    getNextPageParam: (lastPage) => {
      const currentPage = parseInt(lastPage.body.PageNo, 10);

      const items = lastPage.body.items?.item;

      const currentItemsCount = Array.isArray(items)
        ? items.length
        : items ? 1 : 0;

      if (isNaN(currentPage) || currentItemsCount === 0) {
        return undefined;
      }

      return String(currentPage + 1);
    },
    enabled: category === 'area'
  });
};