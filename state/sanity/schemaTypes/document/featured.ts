import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'man',
      title: 'Men',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'men' }],
        },
      ],
    }),
    defineField({
      name: 'woman',
      title: 'Women',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'women' }],
        },
      ],
    }),
    defineField({
      name: 'unisexs',
      title: 'Unisex',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'unisex' }],
        },
      ],
    }),
  ],
});
