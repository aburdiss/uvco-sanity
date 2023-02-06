import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'formHeadline',
      title: 'Form Headline',
      type: 'string',
    }),
    defineField({
      name: 'formText',
      title: 'Form Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
