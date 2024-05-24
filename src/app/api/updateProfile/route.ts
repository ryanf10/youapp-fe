import axios from '@/lib/axios';
import { NextResponse } from 'next/server';
import { AxiosError } from 'axios';

export async function PUT(req: Request) {
  const token = await req.headers.get('x-access-token');
  const body = await req.json();
  try {
    const res = await axios.put('/updateProfile', body, {
      headers: { 'x-access-token': token },
    });
    return NextResponse.json(res.data, {
      status: res.status,
      statusText: res.statusText,
    });
  } catch (error) {
    return NextResponse.json((error as AxiosError).response?.data, {
      status: 500,
    });
  }
}
