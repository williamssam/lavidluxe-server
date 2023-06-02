import {defineField} from 'sanity'

export default defineField({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderBy',
      title: 'Order By',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paidAt',
      title: 'Date Paid',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'status',
    //   title: 'Status',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     list: [
    //       {title: 'Processing', value: 'processing'},
    //       {title: 'Completed', value: 'Completed'},
    //     ],
    //   },
    // },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      title: 'Order Items',
      name: 'orderItems',
      type: 'array',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      ],
    },
    {
      name: 'customerNote',
      title: 'Customer Note',
      type: 'string',
    },
  ],
})
