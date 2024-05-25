import { NextResponse } from 'next/server';

import axios from '@/lib/axios';

export async function GET(req: Request) {
  const token = await req.headers.get('x-access-token');
  const res = await axios.get('/getProfile', {
    headers: { 'x-access-token': token },
  });
  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
