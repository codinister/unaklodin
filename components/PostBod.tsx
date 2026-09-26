import Image from 'next/image';
import {
  PortableText,
  type PortableTextComponents,
} from '@portabletext/react';
import { urlFor } from './image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // Make sure the image has an asset reference
      if (!value?.asset?._ref) {
        console.warn('Portable Text image has no asset:', value);
        return null;
      }

      const imageUrl = urlFor(value)
        .width(1200)
        .auto('format')
        .url();

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || ''}
            width={1200}
            height={800}
            className="h-auto w-full rounded-lg"
          />
        </div>
      );
    },
  },
};

export default function PostBody({ body }: { body: any[] }) {
  return (
    <PortableText
      value={body}
      components={components}
    />
  );
}