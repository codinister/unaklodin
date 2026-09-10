import getProducts from '@/lib/getProducts';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, {params}: {params: Promise<{slug: string}>}) {

  const type = (await params)?.slug

  try {
    const res = await getProducts(type);
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
