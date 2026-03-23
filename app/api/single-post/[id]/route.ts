
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest,{params} : {params: Promise<{id: string}>}) {

  const id = ( await params).id

  try {
    const data = await serverConfig.fetch(groq`
    *[_type == 'post' && _id == $id]{
    'id': _id,
    title, 
    'thumb': thumb.asset->url, 
    'gallery': image.images[].img.asset->url, 
    'excerpt': array::join(string::split( (pt::text(cards[0].body)) , '' )[0..150] , '' )+'...',
    'content': cards[]{
    'body': body
    }, 
    'youtube' : youtube[].link
    }
    `, {id});
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
