import axios from 'axios';

import type { Response } from '@/types/response';

export const getAreas = async (code: string, pageParma: string): Promise<Response<'area'>> => {
  const response = await axios.get('/api/area2', {
    params: {
      sido: code === '전체' ? undefined : code,
      PageNo: pageParma,
      numOfrows: '12'
    }
  });

  return response.data.response;
};