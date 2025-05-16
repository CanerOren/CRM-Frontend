export default [
  {
    path: '/app/customer-types',
    name: 'CustomerTypes',
    component: () => import('@/views/Admin/Defines/CustomerTypes/Index.vue'),
    meta: {
      pageTitle: 'Müşteri Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_TYPES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/customer-types/add',
    name: 'CustomerTypesAdd',
    component: () => import('@/views/Admin/Defines/CustomerTypes/Add.vue'),
    meta: {
      pageTitle: 'Müşteri Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-types',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_TYPES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/customer-types/edit/:id',
    name: 'CustomerTypesEdit',
    component: () => import('@/views/Admin/Defines/CustomerTypes/Edit.vue'),
    meta: {
      pageTitle: 'Müşteri Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-types',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_TYPES_EDIT',
      action: 'read',
    },
  },
]
