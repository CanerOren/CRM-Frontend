export default [
  {
    path: '/app/customer-request-importances',
    name: 'CustomerRequestImportances',
    component: () => import('@/views/Admin/Defines/CustomerRequestImportances/Index.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Önem',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_IMPORTANCES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-importances/add',
    name: 'CustomerRequestImportancesAdd',
    component: () => import('@/views/Admin/Defines/CustomerRequestImportances/Add.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Önem',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-importances',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_IMPORTANCES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-importances/edit/:id',
    name: 'CustomerRequestImportancesEdit',
    component: () => import('@/views/Admin/Defines/CustomerRequestImportances/Edit.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Önem',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-importances',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_IMPORTANCES_EDIT',
      action: 'read',
    },
  },
]
