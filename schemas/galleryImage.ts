import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Alternative text is required.',
          hidden: ({ parent }) => !parent?.asset,
          validation: (Rule) => [Rule.required()],
        },
      ],
    }),
  ],
});
