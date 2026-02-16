import Links from '@/components/nav/Links';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  //  accessoriesCat
  //  menCat
  //  unisexCat
  //  womenCat

  try {
    const menCat = await serverConfig.fetch(groq`
    *[_type == 'menCat'].title
    `);

    const accessoriesCat = await serverConfig.fetch(groq`
    *[_type == 'accessoriesCat'].title
    `);

    const unisexCat = await serverConfig.fetch(groq`
    *[_type == 'unisexCat'].title
    `);

    const womenCat = await serverConfig.fetch(groq`
    *[_type == 'womenCat'].title
    `);

    return NextResponse.json([
      {
        link: 'Accessories',
        sub: accessoriesCat,
      },
      {
        link: 'Men',
        sub: menCat,
      },
      {
        link: 'Unisex',
        sub: unisexCat,
      },
      {
        link: 'Women',
        sub: womenCat,
      },
    ]);
  } catch (err) {
    console.log(err);
  }
}
