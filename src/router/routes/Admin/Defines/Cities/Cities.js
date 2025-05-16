export default [
  {
    path: '/app/cities',
    name: 'Cities',
    component: () => import('@/views/Admin/Defines/Cities/Index.vue'),
    meta: {
      pageTitle: 'Şehirler',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CITIES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/cities/add',
    name: 'CityAdd',
    component: () => import('@/views/Admin/Defines/Cities/Add.vue'),
    meta: {
      pageTitle: 'Şehirler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/cities',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_CITIES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/cities/edit/:id',
    name: 'CityEdit',
    component: () => import('@/views/Admin/Defines/Cities/Edit.vue'),
    meta: {
      pageTitle: 'Şehirler',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/cities',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_CITIES_EDIT',
      action: 'read',
    },
  },
]
