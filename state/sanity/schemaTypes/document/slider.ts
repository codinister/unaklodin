import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageObj'
    })
  ],
});
