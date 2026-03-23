import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ads',
  title: 'Ads',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'e.g https://www.businessname.com'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
