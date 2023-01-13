import {defineField} from 'sanity'

export default defineField({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
    },
    {
      name: 'isPaid',
      title: 'Is Paid',
      type: 'boolean',
    },
    {
      title: 'Order Items',
      name: 'orderItems',
      type: 'array',
      of: [
        {
          title: 'Order Item',
          type: 'orderItem',
        },
      ],
    },
    {
      title: 'Shipping Information',
      name: 'shippingInformation',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) => Rule.email().required(),
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
        {
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'shippingAmount',
          title: 'Shipping Amount',
          type: 'number',
        },
      ],
    },
    {
      name: 'customerNote',
      title: 'Customer Note',
      type: 'string',
    },
  ],
})
