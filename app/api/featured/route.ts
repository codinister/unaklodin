import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await serverConfig.fetch(groq`
    *[_type == 'men' || _type == 'women' || _type == 'unisex']{
    'image': items.thumbnail.img.asset->url,
    'product': items.product,
    'sub_title': items.sub_title
    }
    `);



    return NextResponse.json(data.slice(0,20));
  } catch (err) {
    console.log(err);
  }
}
