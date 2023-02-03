import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = ['home', 'gallery', 'about', 'contact', 'privacyPolicy'];

export default defineConfig({
  name: 'default',
  title: 'uvco-sanity',

  projectId: '9qmqbv2y',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Home').id('home').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('home').documentId('home')
            ),

            S.listItem()
              .title('Gallery')
              .id('gallery')
              .child(S.document().schemaType('gallery').documentId('gallery')),

            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),

            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),

            S.listItem()
              .title('Privacy Policy')
              .id('privacyPolicy')
              .child(
                S.document()
                  .schemaType('privacyPolicy')
                  .documentId('privacyPolicy')
              ),

            // Regular document types
            S.documentTypeListItem('event').title('Event'),
            // S.documentTypeListItem('author').title('Authors'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType)
      ),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
