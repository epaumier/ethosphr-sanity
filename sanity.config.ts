import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { internationalizedArray } from "sanity-plugin-internationalized-array"
import {documentInternationalization} from '@sanity/document-internationalization'


export default defineConfig({
  name: 'default',
  title: 'ethosphr',

  projectId: 'xdmq2grj',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'fr', title: 'French'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['fr'],
      fieldTypes: ['string'],
      buttonAddAll: false // default true
    }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'fr', title: 'French'},
        {id: 'en', title: 'English'}
      ],
      schemaTypes: ['page'],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
