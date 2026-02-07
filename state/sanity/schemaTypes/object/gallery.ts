import { defineField, defineType } from 'sanity';


export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'imageObj',
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ]
});
