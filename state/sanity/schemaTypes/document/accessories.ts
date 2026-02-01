import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'accessories',
  title: 'Accessories',
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
      type: 'reference',
      to: [{ type: 'size' }],
    }),
    defineField({
      name: 'colour',
      title: 'Colour',
      type: 'reference',
      to: [{ type: 'colour' }],
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'accessoriesCat' }],
    }),
  ],
});
