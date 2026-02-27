import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    // Get query param properly
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing id parameter' },
        { status: 400 }
      );
    }

    // Use GROQ params correctly
    const query = groq`
      *[_type == "policies" && slug.current == $id]{
        title,
        body
      }
    `;

    const data = await serverConfig.fetch(query, { id });

    return NextResponse.json(data, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Failed to fetch policy' },
      { status: 500 }
    );
  }
}