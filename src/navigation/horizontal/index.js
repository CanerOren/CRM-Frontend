export default [
  {
    title: 'Dashboard',
    route: 'home',
    icon: 'HomeIcon',
    resource: 'APP_DASHBOARD',
    action: 'read',
  },
  {
    title: 'Site Genel',
    route: null,
    icon: 'GlobeIcon',
    children: [
      {
        title: 'Site Menü',
        route: 'SiteMenus',
        resource: 'ADMIN_SITE_MENU',
        action: 'read',
      },
      {
        title: 'Carousel',
        route: 'Carousel',
        resource: 'ADMIN_CAROUSEL',
        action: 'read',
      },
      {
        title: 'Sabit İçerikler',
        route: 'Contents',
        resource: 'ADMIN_CONTENTS',
        action: 'read',
      },
    ],
  },
  {
    title: 'Kurumsal',
    route: null,
    icon: 'FileTextIcon',
    children: [
      {
        title: 'Biz Kimiz',
        route: 'About',
        resource: 'ADMIN_ABOUT',
        action: 'read',
      },
      {
        title: 'Deneyim',
        route: 'AboutCounters',
        resource: 'ADMIN_ABOUT_COUNTERS',
        action: 'read',
      },
      {
        title: 'Sertifikalar',
        route: 'Certificates',
        resource: 'ADMIN_CERTIFICATES_LIST',
        action: 'read',
      },
      {
        title: 'Referanslar',
        route: 'References',
        resource: 'ADMIN_REFERENCES',
        action: 'read',
      },
      {
        title: 'İletişim',
        route: 'Contacts',
        resource: 'ADMIN_CONTACT',
        action: 'read',
      },
    ],
  },
  {
    title: 'Hizmetler',
    route: 'Services',
    icon: 'BoxIcon',
    children: [
      {
        title: 'Oluştur',
        route: 'ServiceAdd',
        resource: 'ADMIN_SERVICES',
        action: 'read',
      },
      {
        title: 'Listele',
        route: 'Services',
        resource: 'ADMIN_SERVICES',
        action: 'read',
      },
      {
        title: 'Kategoriler',
        route: 'ServiceCategories',
        resource: 'ADMIN_SERVICE_CATEGORIES',
        action: 'read',
      },
    ],
  },
  {
    title: 'Ürünler',
    route: 'Products',
    icon: 'CodesandboxIcon',
    children: [
      {
        title: 'Oluştur',
        route: 'ProductAdd',
        resource: 'ADMIN_PRODUCTS',
        action: 'read',
      },
      {
        title: 'Listele',
        route: 'Products',
        resource: 'ADMIN_PRODUCTS',
        action: 'read',
      },
      {
        title: 'Kategoriler',
        route: 'ProductCategories',
        resource: 'ADMIN_PRODUCT_CATEGORIES',
        action: 'read',
      },
    ],
  },
  {
    title: 'Projeler',
    route: 'Projects',
    icon: 'LayersIcon',
    children: [
      {
        title: 'Oluştur',
        route: 'ProjectAdd',
        resource: 'ADMIN_PROJECTS',
        action: 'read',
      },
      {
        title: 'Listele',
        route: 'Projects',
        resource: 'ADMIN_PROJECTS',
        action: 'read',
      },
    ],
  },
  {
    title: 'Blog',
    route: 'Blog',
    icon: 'BookIcon',
    children: [
      {
        title: 'Oluştur',
        route: 'BlogAdd',
        resource: 'ADMIN_BLOG',
        action: 'read',
      },
      {
        title: 'Listele',
        route: 'Blog',
        resource: 'ADMIN_BLOG',
        action: 'read',
      },
      {
        title: 'Kategoriler',
        route: 'BlogCategories',
        resource: 'ADMIN_BLOG_CATEGORIES',
        action: 'read',
      },
    ],
  },
  {
    title: 'Modüller',
    route: null,
    icon: 'CodesandboxIcon',
    children: [
      {
        title: 'Sosyal Medya',
        route: 'Socialmedia',
        resource: 'ADMIN_MODULES',
        action: 'read',
      },
    ],
  },
  {
    title: 'Dil Çeviri',
    route: null,
    icon: 'FlagIcon',
    children: [
      {
        title: 'Çeviri Listesi',
        route: 'Translate',
        resource: 'ADMIN_TRANSLATE',
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
  {
    title: 'Ayarlar',
    route: null,
    icon: 'SettingsIcon',
    children: [
      {
        title: 'Genel Yapılandırma',
        route: 'Configs',
        resource: 'ADMIN_CONFIG',
        action: 'read',
      },
      {
        title: 'SEO Yapılandırma',
        route: 'Components',
        resource: 'ADMIN_CONFIG',
        action: 'read',
      },
      {
        title: 'SMTP',
        route: 'Smtp',
        resource: 'ADMIN_SMTP',
        action: 'read',
      },
    ],
  },
]
