import { NextResponse } from 'next/server';

import type { Response } from '@/types/response';
import { parsingXml } from '@/utils/parsingXml';
import { axiosInstance } from '@/axiosInstance/axiosInstance';

export const GET = async (request: Request): Promise<NextResponse> => {
  const searchParams = new URL(request.url).searchParams;

  const sido = searchParams.get('sido') ?? undefined;
  const PageNo = searchParams.get('PageNo') ?? undefined;
  const numOfrows = searchParams.get('numOfrows') ?? undefined;

  const response = await axiosInstance.get('area2', {
    params: {
      sido: sido === '전체' ? undefined : sido,
      PageNo,
      numOfrows
    }
  });

  const xmlResponse = response.data;
  const parsedResponse = parsingXml(xmlResponse);

  return NextResponse.json(parsedResponse as Response<'area'>);
};