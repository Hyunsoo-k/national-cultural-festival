import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKeys'
import { getDetail } from '@/services/getDetail';

export const useGetDetail = (seq: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.detail(seq),
    queryFn: () => getDetail(seq),
    enabled: !!seq
  });
};