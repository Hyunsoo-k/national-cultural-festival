import { NextResponse } from 'next/server';

import type { Response } from '@/types/response';
import { parsingXml } from '@/utils/parsingXml';
import { axiosInstance } from '@/axiosInstance/axiosInstance';

export const GET = async (request: Request): Promise<NextResponse> => {
  const searchParams = new URL(request.url).searchParams;

  const seq = searchParams.get('seq');

  if (!seq) {
    return NextResponse.json({ error: 'seq is required' }, { status: 400 });
  }

  const response = await axiosInstance.get('detail2', {
    params: { seq }
  });

  const xmlResponse = response.data;
  const parsedResponse = parsingXml(xmlResponse);

  return NextResponse.json(parsedResponse as Response<'detail'>);
};