import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, {params}: {params: Promise<{type: string}>}) {

const type = (await params).type

  try {
    const data = await serverConfig.fetch(groq`
    *[ _type == 'banners' && type==$type]{
    'images': images[].img.asset->url,
      link, 
      title, 
      type
    
      }`, {type}
    );



    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
