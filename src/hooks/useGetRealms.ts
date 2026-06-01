import { useQuery } from '@tanstack/react-query'

import { Category } from '@/types/category';
import { QUERY_KEYS } from '@/constants/queryKeys'
import { getRealms } from '@/services/getRealms';

export const useGetRealms = (category: Category, code: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.realms(code),
    queryFn: () => getRealms(code),
    enabled: category === 'realm'
  });
};