export default [
  {
    path: '/app/customer-request-statuses',
    name: 'CustomerRequestStatuses',
    component: () => import('@/views/Admin/Defines/CustomerRequestStatuses/Index.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri Durumu',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_STATUSES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-statuses/add',
    name: 'CustomerRequestStatusesAdd',
    component: () => import('@/views/Admin/Defines/CustomerRequestStatuses/Add.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri Durumu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-statuses',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_STATUSES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-statuses/edit/:id',
    name: 'CustomerRequestStatusesEdit',
    component: () => import('@/views/Admin/Defines/CustomerRequestStatuses/Edit.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri Durumu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-statuses',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_STATUSES_EDIT',
      action: 'read',
    },
  },
]
