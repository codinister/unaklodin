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
      description: 'Break your post into paragraph and add it one after the other',
      of: [
        {
          type: 'bodyCard',
        },
      ],
    }),
    defineField({
      name: 'thumb',
      title: 'Thumbnail',
      type: 'image', 
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('Thumbnail required!'),
      description: 'Upload a thumbnail image that best describe this article'
    }),
    defineField({
      name: 'image',
      title: 'Gallery',
      type: 'gallery',
      description: 'Upload all images associated with this article'
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube Links',
      description: 'Add youtube links associated with this article',
      type: 'array',
      of: [
        {
          type: 'youtube',
        },
      ],
    }),
  ],
});
