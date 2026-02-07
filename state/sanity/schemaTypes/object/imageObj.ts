import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageObj',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ], 
  preview: {
    select: {
      media: 'img'
    }
  }
})
