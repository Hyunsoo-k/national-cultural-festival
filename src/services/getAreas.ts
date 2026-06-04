import { XMLParser } from 'fast-xml-parser';

import type { Response } from '@/types/response';
import { axiosInstance } from '@/axiosInstance/axiosInstance'

export const getAreas = async (code: string, pageParma: undefined | string): Promise<Response<'area'>> => {
  const response = await axiosInstance.get('/area2', {
    params: {
      sido: code === '전체' ? undefined : code,
      PageNo: pageParma,
      numOfrows: '12'
    }
  });

  const data = response.data;

  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: true,
  });
  
  const jsonData = parser.parse(data);

  return jsonData.response;
};