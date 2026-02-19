import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {

  try {
    const data = await serverConfig.fetch(groq`
    *[_type == 'post']{
    title, 
    'thumb': thumb.asset->url, 
    'gallery': image.images[].img.asset->url, 
    'excerpt': array::join(string::split( (pt::text(cards[0].body)) , '' )[0..150] , '' )+'...',
    'content': cards[]{
    'body': body
    }
    }
    `);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
