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

  const url = `https://unaklodin.com/post/${post.slug}`;

  const image = post.thumb
    ? `${post.thumb}?w=1200&h=630&fit=crop`
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      siteName: 'Your Website',

      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: post.title,
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