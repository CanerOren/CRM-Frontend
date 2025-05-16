export default [
  {
    path: '/data/meetings',
    name: 'Meetings',
    component: () => import('@/views/Admin/Data/Meetings/Index.vue'),
    meta: {
      pageTitle: 'Görüşmeler',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETINGS_LIST',
      action: 'read',
    },
  },
  {
    path: '/data/meetings/add/:id',
    name: 'MeetingsAdd',
    component: () => import('@/views/Admin/Data/Meetings/Add.vue'),
    meta: {
      pageTitle: 'Görüşmeler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/meetings',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETINGS_ADD',
      action: 'read',
    },
  },
  {
    path: '/data/meetings/edit/:id',
    name: 'MeetingsEdit',
    component: () => import('@/views/Admin/Data/Meetings/Edit.vue'),
    meta: {
      pageTitle: 'Görüşmeler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/meetings',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETINGS_EDIT',
      action: 'read',
    },
  },
  {
    path: '/data/meetings/search-customer',
    name: 'MeetingsSearch',
    component: () => import('@/views/Admin/Data/Meetings/SearchCustomer.vue'),
    meta: {
      pageTitle: 'Görüşmeler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/meetings',
          active: false,
        },
        {
          text: 'Ara',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETINGS_SEARCH',
      action: 'read',
    },
  },
  {
    path: '/data/meetings/view/:id',
    name: 'MeetingsView',
    component: () => import('@/views/Admin/Data/Meetings/View.vue'),
    meta: {
      pageTitle: 'Görüşmeler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/meetings',
          active: false,
        },
        {
          text: 'Görüntüle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETINGS_VIEW',
      action: 'read',
    },
  },
]
