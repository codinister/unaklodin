import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest,{params}: {params: Promise<{id: string}>}) {
const id = (await params).id
  try {
    const data = await serverConfig.fetch(groq`
    *[_id == $id]{
    'type': _type, 
    'createdAt' : _createdAt, 
    'updatedAt' : _updatedAt,
    'id': _id,
    title,
    "cat" : category->title, 
    "colour": colour[]->{
    title,
    hex
    },
    "size": sizes[]->title,
    "description": items.description,
    "excerpt": array::join(string::split((pt::text(items.description)), "")[0..200], "")+"...",
    "features": items.features[].title,
    "gallery": items.gallery.images[].img.asset->url,
    "price": items.price,
    "product": items.product,
    "stock": items.stock,
    "sub_title": items.sub_title ,
    "thumbnail": items.thumbnail.img.asset->url
    
    }
    `, {id});
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
