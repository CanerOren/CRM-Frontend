export default [
  {
    path: '/app/customer-request-subjects',
    name: 'CustomerRequestSubjects',
    component: () => import('@/views/Admin/Defines/CustomerRequestSubjects/Index.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Konu',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_SUBJECTS_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-subjects/add',
    name: 'CustomerRequestSubjectsAdd',
    component: () => import('@/views/Admin/Defines/CustomerRequestSubjects/Add.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Konu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-subjects',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_SUBJECTS_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/customer-request-subjects/edit/:id',
    name: 'CustomerRequestSubjectsEdit',
    component: () => import('@/views/Admin/Defines/CustomerRequestSubjects/Edit.vue'),
    meta: {
      pageTitle: 'Müşteri Talep Konu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/customer-request-subjects',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUEST_SUBJECTS_EDIT',
      action: 'read',
    },
  },
]
