import {defineField} from 'sanity'

export default defineField({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sizes',
      type: 'string',
      title: 'Sizes',
      initialValue: '6,7,8,9,10,11,12,13,14,15,16',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'stockStatus',
      type: 'string',
      title: 'Stock Status',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'In stock', value: 'in-stock'},
          {title: 'Out of Stock', value: 'out-of-stock'},
        ],
      },
    },
    {
      title: 'Product Colors',
      name: 'productColors',
      type: 'array',
      of: [
        {
          title: 'color',
          type: 'string',
        },
      ],
    },
    {
      title: 'Promo',
      name: 'promo',
      type: 'object',
      fields: [
        {
          title: 'Promo On',
          name: 'promoOn',
          type: 'boolean',
          initialValue: false,
        },
        {
          title: 'Promo Price',
          name: 'promoPrice',
          type: 'number',
        },
        {
          title: 'Promo Start',
          name: 'promoStart',
          type: 'date',
        },
        {
          title: 'Promo End',
          name: 'promoEnd',
          type: 'date',
        },
      ],
    },
  ],
})
