import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
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
    defineField({
      name: 'firstSectionHeadline',
      title: 'First Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'firstSectionText',
      title: 'First Section Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'donateHeadline',
      title: 'Donate Headline',
      type: 'string',
    }),
    defineField({
      name: 'secondSectionText',
      title: 'Second Section Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'eventsHeadline',
      title: 'Events Headline',
      type: 'string',
    }),
    defineField({
      name: 'noEventsText',
      title: 'No Events Text',
      description:
        'Do not use this field to add upcoming event information. Text in this field will show after all published events are in the past. To add a concert, add a new "Event" in the left sidebar.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
