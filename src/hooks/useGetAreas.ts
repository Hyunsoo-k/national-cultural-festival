import { useQuery } from '@tanstack/react-query'

import { Category } from '@/types/category';
import { QUERY_KEYS } from '@/constants/queryKeys'
import { getAreas } from '@/services/getAreas'

export const useGetAreas = (category: Category, code: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.areas(code),
    queryFn: () => getAreas(code),
    enabled: category === 'area'
  });
};