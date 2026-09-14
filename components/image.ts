// sanity/lib/image.ts

import { createImageUrlBuilder } from '@sanity/image-url';
import client from '@/state/sanity/client.config';

export const urlFor = (source: any) =>
  createImageUrlBuilder(client).image(source);