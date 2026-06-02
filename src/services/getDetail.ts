import { axiosInstance } from '@/axiosInstance/axiosInstance'
import { Response } from '@/types/response';
import { XMLParser } from 'fast-xml-parser';

export const getDetail = async (seq: string): Promise<Response<'detail'>> => {
  const response = await axiosInstance.get('/detail2', {
    params: { seq }
  });

  const data = response.data;

  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: true,
  });
  
  const jsonData = parser.parse(data);

  return jsonData.response
};