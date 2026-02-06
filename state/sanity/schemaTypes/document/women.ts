import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'women',
  title: 'Women',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'item',
    }),

    defineField({
      name: 'sizes',
      title: 'Size',
      description: 'You can choose more than one size',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'size' }],
        },
      ],
    }),
    defineField({
      name: 'colour',
      title: 'Colour',
      description: 'You can choose more than one colour',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'colour' }],
        },
      ],
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'womenCat' }],
    }),
  ],
});
