export default [
  {
    title: 'Dashboard',
    route: 'home',
    icon: 'HomeIcon',
    resource: 'APP_DASHBOARD',
    action: 'read',
  },

  {
    title: 'Örnek',
    route: 'Products',
    icon: 'CodesandboxIcon',
    children: [
      {
        title: 'Kategoriler',
        route: 'ProductCategories',
        resource: 'ADMIN_PRODUCTS',
        action: 'read',
      },
    ],
  },
  {
    title: 'Kullanıcılar',
    route: 'Users',
    icon: 'UsersIcon',
    children: [
      {
        title: 'Kullanıcılar',
        route: 'Users',
        resource: 'ADMIN_USERS',
        action: 'read',
      },
      {
        title: 'Kullanıcı Yetkileri',
        route: 'UserTypes',
        resource: 'ADMIN_USER_TYPES',
        action: 'read',
      },
    ],
  },
  // {
  //   title: 'Ayarlar',
  //   route: null,
  //   icon: 'SettingsIcon',
  //   children: [
  //     {
  //       title: 'Genel Yapılandırma',
  //       route: 'Configs',
  //       resource: 'ADMIN_CONFIG',
  //       action: 'read',
  //     },
  //     {
  //       title: 'SEO Yapılandırma',
  //       route: 'Components',
  //       resource: 'ADMIN_CONFIG',
  //       action: 'read',
  //     },
  //     {
  //       title: 'SMTP',
  //       route: 'Smtp',
  //       resource: 'ADMIN_SMTP',
  //       action: 'read',
  //     },
  //   ],
  // },
]
