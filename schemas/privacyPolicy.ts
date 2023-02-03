import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
  ],
});
