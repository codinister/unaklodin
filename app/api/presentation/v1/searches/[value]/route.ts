import getProductsIn from '@/lib/getProductsIn';
import { ItemTypes } from '@/types/types';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ value: string }> },
) {
  const values = (await params).value;
  try {
    const data = await getProductsIn(['men', 'women', 'unisex']);

    return NextResponse.json(
      data
        .filter((v: ItemTypes) =>
          Object.values(v.title)
            .join('')
            .toLowerCase()
            .includes(values.toLowerCase()),
        )
        .slice(0, 4),
    );
  } catch (err) {
    console.log(err);
  }
}
