import getProductById from '@/lib/getProductById';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  try {
    const res = await getProductById(id);
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
