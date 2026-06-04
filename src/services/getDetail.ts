import axios from 'axios';

import type { Response } from '@/types/response';

export const getDetail = async (seq: string): Promise<Response<'detail'>> => {
  const response = await axios.get('/api/detail2', {
    params: { seq }
  });

  return response.data.response;
};