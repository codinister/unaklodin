import getProducts from '@/lib/getProducts';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await getProducts('accessories');
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
