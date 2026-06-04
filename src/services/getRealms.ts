import axios from 'axios';

import type { Response } from '@/types/response';

export const getRealms = async (code: string, pageParam: string): Promise<Response<'realm'>> => {
  const response = await axios.get('/api/realm2', {
    params: {
      realmCode: code,
      PageNo: pageParam,
      numOfrows: '12'
    }
  });

  return response.data.response;
};