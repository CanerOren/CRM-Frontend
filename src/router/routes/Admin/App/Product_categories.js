export default [
  {
    path: '/app/product-categories',
    name: 'ProductCategories',
    component: () => import('@/views/Admin/Product_categories/Index.vue'),
    meta: {
      pageTitle: 'Ürün Kategorileri',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_PRODUCTS',
      action: 'read',
    },
  },
  {
    path: '/app/product-categories/add',
    name: 'ProductCategoryAdd',
    component: () => import('@/views/Admin/Product_categories/Add.vue'),
    meta: {
      pageTitle: 'Ürün Kategorileri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/product-categories',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_PRODUCTS',
      action: 'read',
    },
  },
  {
    path: '/app/product-categories/edit/:id',
    name: 'ProductCategoryEdit',
    component: () => import('@/views/Admin/Product_categories/Edit.vue'),
    meta: {
      pageTitle: 'Ürün Kategorileri',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/product-categories',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_PRODUCTS',
      action: 'read',
    },
  },
]
