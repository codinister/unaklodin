import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'comp_name',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'comp_location',
      title: 'Company Location',
      type: 'string',
    }),
    defineField({
      name: 'comp_email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
    }),
    defineField({
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
    }),
    defineField({
      name: 'phone3',
      title: 'Phone 3',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'googlemap',
      title: 'Google Map',
      type: 'string',
    }),

    defineField({
      name: 'digitaladdress',
      title: 'Digital Address',
      type: 'string',
    }),
  ],
});
