import {defineField} from 'sanity'

export default defineField({
  name: 'faqs',
  title: 'Frequently Asked Questions',
  type: 'document',
  fields: [
    {
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
