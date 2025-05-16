export default [
  {
    path: '/app/districts',
    name: 'Districts',
    component: () => import('@/views/Admin/Defines/Districts/Index.vue'),
    meta: {
      pageTitle: 'Semtler',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_DISTRICTS_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/districts/add',
    name: 'DistrictsAdd',
    component: () => import('@/views/Admin/Defines/Districts/Add.vue'),
    meta: {
      pageTitle: 'Semtler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/districts',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_DISTRICTS_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/districts/edit/:id',
    name: 'DistrictsEdit',
    component: () => import('@/views/Admin/Defines/Districts/Edit.vue'),
    meta: {
      pageTitle: 'Semtler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/districts',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_DISTRICTS_EDIT',
      action: 'read',
    },
  },
]
