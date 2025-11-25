import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'newArrivals',
  title: 'New Arrivals',
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
      type: 'array',
      of: [{
        type: 'item'
      }]
    }),
  ],
});
