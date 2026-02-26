import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {

  try {
    const data = await serverConfig.fetch(groq`
    *[_type == 'men']{
    title,
    "cat" : category->title, 
    "colour": colour[]->title,
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
    `);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
