export default [
  {
    path: '/data/customer-requests',
    name: 'CustomerRequests',
    component: () => import('@/views/Admin/Data/CustomerRequests/Index.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUESTS_LIST',
      action: 'read',
    },
  },
  {
    path: '/data/customer-requests/add/:id',
    name: 'CustomerRequestsAdd',
    component: () => import('@/views/Admin/Data/CustomerRequests/Add.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customer-requests',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUESTS_ADD',
      action: 'read',
    },
  },
  {
    path: '/data/customer-requests/edit/:id',
    name: 'CustomerRequestsEdit',
    component: () => import('@/views/Admin/Data/CustomerRequests/Edit.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customer-requests',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUESTS_EDIT',
      action: 'read',
    },
  },
  {
    path: '/data/customer-requests/search-customer',
    name: 'CustomerRequestsSearch',
    component: () => import('@/views/Admin/Data/CustomerRequests/SearchCustomer.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customer-requests',
          active: false,
        },
        {
          text: 'Ara',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUESTS_SEARCH',
      action: 'read',
    },
  }, {
    path: '/data/customer-requests/view/:id',
    name: 'CustomerRequestsView',
    component: () => import('@/views/Admin/Data/CustomerRequests/View.vue'),
    meta: {
      pageTitle: 'Müşteri İlişkileri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/customer-requests',
          active: false,
        },
        {
          text: 'Görüntüle',
          active: true,
        },
      ],
      resource: 'ADMIN_CUSTOMER_REQUESTS_VIEWS',
      action: 'read',
    },
  },
]
