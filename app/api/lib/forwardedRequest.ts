import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {

  try {
    const data = await serverConfig.fetch(groq`
    *[_type == 'about']{
    title, 
    body,
    'excerpt': array::join(
    string::split(
    (pt::text(body)), ''
    )[0..120] , ''
    )+"...", 
    'image': image.img.asset->url, 
    'gallery': cards[]{
    title, 
    sub_title, 
    'image': image.asset->url, 
    body
    }

    }
    `);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
