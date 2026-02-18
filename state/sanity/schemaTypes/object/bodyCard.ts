import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'bodyCard',
  title: 'Text',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
});
