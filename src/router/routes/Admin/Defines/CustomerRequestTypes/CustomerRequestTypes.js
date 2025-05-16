export default [
  {
    path: '/app/customer-request-types',
    name: 'CustomerRequestTypes',
    component: () => import('@/views/Admin/Defines/CustomerRequestTypes/Index.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_TYPES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-types/add',
    name: 'CustomerRequestTypesAdd',
    component: () => import('@/views/Admin/Defines/CustomerRequestTypes/Add.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-types',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_TYPES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-types/edit/:id',
    name: 'CustomerRequestTypesEdit',
    component: () => import('@/views/Admin/Defines/CustomerRequestTypes/Edit.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-types',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_TYPES_EDIT',
      action: 'read',
    },
  },
]
