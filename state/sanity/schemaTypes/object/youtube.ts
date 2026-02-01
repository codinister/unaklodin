import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'youtube',
  title: 'Youtube Link',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required().error('Link field required!')
    })
  ],
});
