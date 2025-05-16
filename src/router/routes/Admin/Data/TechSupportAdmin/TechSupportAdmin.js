export default [
  {
    path: '/admin/support',
    name: 'TechSupportAdmin',
    component: () => import('@/views/Admin/Data/AdminTechSupport/Index.vue'),
    meta: {
      pageTitle: 'Admin Teknik Destek',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_TECH_SUPPORT_ADMIN_LIST',
      action: 'read',
    },
  },

  {
    path: '/admin/support/view/:id',
    name: 'TechSupportAdminView',
    component: () => import('@/views/Admin/Data/AdminTechSupport/View.vue'),
    props: true,
    meta: {
      pageTitle: 'Admin Teknik Destek',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/admin/support',
          active: false,
        },
        {
          text: 'Görüntüle',
          active: true,
        },
      ],
      resource: 'ADMIN_TECH_SUPPORT_ADMIN_VIEW',
      action: 'read',
    },
  },
]
