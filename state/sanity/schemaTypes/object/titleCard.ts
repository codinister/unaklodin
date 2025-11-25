import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'titleCard',
  title: 'Title Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ],
});
