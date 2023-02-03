import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
  ],
});
