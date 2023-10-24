import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'missions',
  title: 'Missions',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'text',
    }),
    defineField({
      name: 'lieu',
      title: 'Lieu',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'text',
      }),
    defineField({
      name: 'espece',
      title: 'Espece',
      type: 'text',
      }),
    defineField({
      name: 'images',
      title: 'Image(s)',
      type: 'array',
      of: [
        {type: 'image'}
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'body2',
      title: 'Body extra',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'Image',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
