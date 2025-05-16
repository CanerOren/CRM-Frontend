export default [
  {
    path: '/data/customers',
    name: 'Customers',
    component: () => import('@/views/Admin/Data/Customers/Index.vue'),
    meta: {
      pageTitle: 'Müşteriler',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMERS_LIST',
      action: 'read',
    },
  },
  {
    path: '/data/customers/add',
    name: 'CustomersAdd',
    component: () => import('@/views/Admin/Data/Customers/Add.vue'),
    meta: {
      pageTitle: 'Müşteriler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customers',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMERS_ADD',
      action: 'read',
    },
  },
  {
    path: '/data/customers/edit/:id',
    name: 'CustomersEdit',
    component: () => import('@/views/Admin/Data/Customers/Edit.vue'),
    meta: {
      pageTitle: 'Müşteriler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customers',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMERS_EDIT',
      action: 'read',
    },
  }, {
    path: '/data/customers/view/:id',
    name: 'CustomersView',
    component: () => import('@/views/Admin/Data/Customers/View.vue'),
    meta: {
      pageTitle: 'Müşteriler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customers',
          active: false,
        },
        {
          text: 'Görüntüle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMERS_VIEW',
      action: 'read',
    },
  },
]
