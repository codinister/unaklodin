import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await serverConfig.fetch(groq`
    *[ _type == 'banners'].image.images[].img.asset->url`);



    return NextResponse.json(data.slice(0,20));
  } catch (err) {
    console.log(err);
  }
}
