export default [
  {
    path: '/admin/config/smtp',
    name: 'Smtp',
    component: () => import('@/views/Admin/Smtp/Index.vue'),
    meta: {
      pageTitle: 'Ayarlar',
      breadcrumb: [
        {
          text: 'SMTP Yapılandırma',
          active: true,
        },
      ],
      resource: 'ADMIN_SMTP_CONFIG',
      action: 'read',
    },
  },
]
