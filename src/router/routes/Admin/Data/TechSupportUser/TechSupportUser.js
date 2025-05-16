export default [
  {
    path: '/user/support/view',
    name: 'TechSupportUserView',
    component: () => import('@/views/Admin/Data/UserTechSupport/View.vue'),
    meta: {
      pageTitle: 'Kullanıcı Teknik Destek',
      breadcrumb: [
        {
          text: 'Görüntüle',
          active: true,
        },
      ],
      resource: 'ADMIN_TECH_SUPPORT_USER_VIEW',
      action: 'read',
    },
  },
]
