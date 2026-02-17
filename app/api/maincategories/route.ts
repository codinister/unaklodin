import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const men = await serverConfig.fetch(groq`
    *[_type == 'men'][0]{
    'menImg': items.thumbnail.img.asset->url
    }
    `);

    const women = await serverConfig.fetch(groq`
    *[_type == 'women'][4]{
    'womenImg': items.thumbnail.img.asset->url
    }
    `);

    return NextResponse.json({
      ...men, 
      ...women
    });
  } catch (err) {
    console.log(err);
  }
}
