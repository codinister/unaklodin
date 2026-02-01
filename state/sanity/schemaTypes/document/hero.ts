import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero',
      type: 'string',
      initialValue: 'Hero',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube Link',
      type: 'youtube',
    }),

  ],
});
