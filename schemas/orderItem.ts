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
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number',
    },
  ],
})
