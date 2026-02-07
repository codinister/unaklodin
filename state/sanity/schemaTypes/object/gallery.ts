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
  ],

  preview: {
    select: {
      imageUrl: 'images.img.asset.url'
    }, 
    prepare({imageUrl}){
      return {media: imageUrl}
    }
  },
});
