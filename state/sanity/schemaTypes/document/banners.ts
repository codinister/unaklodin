import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'banners',
  title: 'Banners',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Banners',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'imageObj',
        },
      ],
    }),
  ],
});
