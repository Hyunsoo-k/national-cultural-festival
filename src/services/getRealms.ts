import { axiosInstance } from '@/axiosInstance/axiosInstance'
import { Response } from '@/types/response';
import { XMLParser } from 'fast-xml-parser';

export const getRealms = async (code: string): Promise<Response<'realm'>> => {
  const response = await axiosInstance.get('/realm2', {
    params: { realmCode: code }
  });

  const data = response.data;

  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: true,
  });
  
  const jsonData = parser.parse(data);

  return jsonData.response
};