

import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';

export async function getPost(id: string) {
  return await serverConfig.fetch(groq`
    *[_type == 'post' && _id == $id][0]{
      title,
      'thumb': thumb.asset->url,
      'gallery': image.images[].img.asset->url,
      'excerpt': array::join(
        string::split((pt::text(cards[0].body)), '')[0..150],
        ''
      ) + '...',
      'content': cards[]{
        body
      },
      'youtube': youtube[].link
    }
  `, { id });
}