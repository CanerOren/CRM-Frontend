export default [
  {
    path: '/admin/user-types',
    name: 'UserTypes',
    component: () => import('@/views/Admin/User_types/Index.vue'),
    meta: {
      pageTitle: 'Kullanıcı Tipleri',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_USER_TYPE_LIST',
      action: 'read',
    },
  },
  {
    path: '/admin/user-types/add',
    name: 'UserTypeAdd',
    component: () => import('@/views/Admin/User_types/Add.vue'),
    meta: {
      pageTitle: 'Kullanıcı Tipleri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/admin/user-types',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_USER_TYPE_ADD',
      action: 'read',
    },
  },
  {
    path: '/admin/user-types/edit/:id',
    name: 'UserTypeEdit',
    component: () => import('@/views/Admin/User_types/Edit.vue'),
    meta: {
      pageTitle: 'Kullanıcı Tipleri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/admin/user-types',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_USER_TYPE_EDIT',
      action: 'read',
    },
  },
]
