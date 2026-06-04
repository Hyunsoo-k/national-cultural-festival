import { NextResponse } from 'next/server';

import type { Response } from '@/types/response';
import { parsingXml } from '@/utils/parsingXml';
import { axiosInstance } from '@/axiosInstance/axiosInstance';

export const GET = async (request: Request): Promise<NextResponse> => {
  const searchParams = new URL(request.url).searchParams;

  const realmCode = searchParams.get('realmCode') ?? undefined;
  const PageNo = searchParams.get('PageNo') ?? undefined;
  const numOfrows = searchParams.get('numOfrows') ?? undefined;

  const response = await axiosInstance.get('realm2', {
    params: {
      realmCode,
      PageNo,
      numOfrows
    }
  });

  const xmlResponse = response.data;
  const parsedResponse = parsingXml(xmlResponse);

  return NextResponse.json(parsedResponse as Response<'realm'>);
};