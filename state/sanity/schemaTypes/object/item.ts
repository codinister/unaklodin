import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'item',
  title: 'Item',
  type: 'object',
  fields: [
    defineField({
      name: 'product',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required().error('Product name field required!')
    }),
    defineField({
      name: 'sub_title',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'textCard',
        },
      ],
    }),
    defineField({
      name: 'stock',
      title: 'In stock',
      type: 'number',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'imageObj',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'category',
    }),
  ],
});
