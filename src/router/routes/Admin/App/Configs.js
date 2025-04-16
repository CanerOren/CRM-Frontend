export default [
  {
    path: '/app/configs',
    name: 'Configs',
    component: () => import('@/views/Admin/Configs/Index.vue'),
    meta: {
      pageTitle: 'Ayarlar',
      breadcrumb: [
        {
          text: 'Genel Yapılandırma',
          active: true,
        },
      ],
      resource: 'ADMIN_CONFIG',
      action: 'read',
    },
  },
]
