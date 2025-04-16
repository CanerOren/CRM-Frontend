export default [
  {
    path: '/admin/users',
    name: 'Users',
    component: () => import('@/views/Admin/Users/Index.vue'),
    meta: {
      pageTitle: 'Kullanıcılar',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_USER_LIST',
      action: 'read',
    },
  },
  {
    path: '/admin/users/add',
    name: 'UserAdd',
    component: () => import('@/views/Admin/Users/Add.vue'),
    meta: {
      pageTitle: 'Kullanıcılar',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/admin/users',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_USER_ADD',
      action: 'read',
    },
  },
  {
    path: '/admin/users/edit/:id',
    name: 'UserEdit',
    component: () => import('@/views/Admin/Users/Edit.vue'),
    meta: {
      pageTitle: 'Kullanıcılar',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/admin/users',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_USER_EDIT',
      action: 'read',
    },
  },
]
