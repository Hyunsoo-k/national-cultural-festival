import { XMLParser } from 'fast-xml-parser';

import type { Response } from '@/types/response';
import { axiosInstance } from '@/axiosInstance/axiosInstance'

export const getRealms = async (code: string, pageParam: undefined | string): Promise<Response<'realm'>> => {
  const response = await axiosInstance.get('/realm2', {
    params: {
      realmCode: code,
      PageNo: pageParam,
      numOfrows: '12'
    }
  });

  const data = response.data;

  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: true,
  });
  
  const jsonData = parser.parse(data);

  return jsonData.response
};