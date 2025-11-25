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
      name: 'men',
      title: 'Men',
      type: 'array',
      of: [
        {
          type: 'men',
        },
      ],
    }),
    defineField({
      name: 'women',
      title: 'Women',
      type: 'array',
      of: [
        {
          type: 'women',
        },
      ],
    }),
    defineField({
      name: 'unisex',
      title: 'Unisex',
      type: 'array',
      of: [
        {
          type: 'unisex',
        },
      ],
    }),
  ],
});
