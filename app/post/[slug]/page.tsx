import { Metadata } from 'next';
import PostClient from './PostClient';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';

async function getPost(slug: string) {
  return await serverConfig.fetch(
    groq`
      *[_type == 'post' && slug.current == $slug][0]{
        title,
        'slug': slug.current,
        'thumb': thumb.asset->url,
        'excerpt': array::join(
          string::split((pt::text(cards[0].body)), '')[0..150],
          ''
        ) + '...'
      }
    `,
    { slug }
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  // Use exact canonical domain including 'www'
  const siteUrl = 'https://www.unaklodin.com';
  const url = `${siteUrl}/post/${post.slug}`;

  const image = post.thumb
    ? `${post.thumb}?w=1200&h=630&fit=crop`
    : undefined;


    const description = 'Read the latest story from U&A Klodin.';

  return {
    metadataBase: new URL(siteUrl),
    title: post.title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: 'U&A Klodin '+description,
      description,
      url,
      type: 'article',
      siteName: 'U&A Klodin',
      locale: 'en_US',
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: post.title,
            type: 'image/jpeg',
          },
        ],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(image && {
        images: [image],
      }),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PostClient slug={slug} />;
}