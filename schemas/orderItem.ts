import {defineField} from 'sanity'

export default defineField({
  title: 'Order Item',
  name: 'orderItem',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'quantity',
      title: 'Product Quantity',
      type: 'number',
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
  ],
})
