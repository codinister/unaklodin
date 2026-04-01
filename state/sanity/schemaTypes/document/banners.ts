import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'banners',
  title: 'Banners',
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
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'gallery',
      validation: (Rule) => Rule.required().error('Image field required!')
    }),
    defineField({
      name: 'type',
      title: 'Banner Type',
      description: 'Choose a banner type',
      validation: (Rule) => Rule.required().error('Type field required!'),
      options: {
        list: [
          {
            title: 'Home Page',
            value: 'home-page',
          },
          {
            title: 'Men Page',
            value: 'men-page',
          },
          {
            title: 'Women Page',
            value: 'women-page',
          },
          {
            title: 'Unisex Page',
            value: 'unisex-page',
          },
          {
            title: 'Accessories Page',
            value: 'access-page',
          },
        ],
      },
      type: 'string',
    }),
  ],
});
