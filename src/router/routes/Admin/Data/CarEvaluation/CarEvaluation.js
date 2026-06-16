export default [
  {
    path: '/data/car-evaluation',
    name: 'CarEvaluation',
    component: () => import('@/views/Admin/Data/CarEvaluation/Index.vue'),
    meta: {
      pageTitle: 'Araç Değerlendirme',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_CAR_EVALUATION_LIST',
      action: 'read',
    },
  },
  {
    path: '/data/car-evaluation/view',
    name: 'CarEvaluationView',
    component: () => import('@/views/Admin/Data/CarEvaluation/View.vue'),
    meta: {
      pageTitle: 'Araç Değerlendirme',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/car-evaluation',
          active: false,
        },
        {
          text: 'Görüntüle',
          active: true,
        },
      ],
      resource: 'ADMIN_CAR_EVALUATION_VIEW',
      action: 'read',
    },
  },
]
