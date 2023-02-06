import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'conductorHeadline',
      title: 'Conductor Headline',
      type: 'string',
    }),
    defineField({
      name: 'conductorText',
      title: 'Conductor Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'joinHeadline',
      title: 'Join Headline',
      type: 'string',
    }),
    defineField({
      name: 'joinText',
      title: 'Join Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'joinImage',
      title: 'Join Image',
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
