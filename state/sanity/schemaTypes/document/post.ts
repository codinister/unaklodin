import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),

    defineField({
      name: 'cards',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'imageCard',
        },
      ],
    }),
        defineField({
      name: 'youtube',
      title: 'Youtube Links',
      type: 'array',
      of: [
        {
          type: 'youtube',
        },
      ],
    }),
  ],
});
