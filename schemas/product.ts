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
      validation: (Rule) => Rule.email().required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.email().required(),
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.email().required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.email().required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.email().required(),
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
      validation: (Rule) => Rule.email().required(),
      options: {
        list: [
          {title: 'In stock', value: 'in-stock'},
          {title: 'Out of Stock', value: 'out-of-stock'},
        ],
      },
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {type: 'category'},
    //     },
    //   ],
    // },
    {
      title: 'Product Colours',
      name: 'productColours',
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
        },
        {
          title: 'Promo Price',
          name: 'promoPrice',
          type: 'number',
        },
      ],
    },
  ],
})
