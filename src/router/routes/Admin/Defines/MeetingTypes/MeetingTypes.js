export default [
  {
    path: '/app/meeting-types',
    name: 'MeetingTypes',
    component: () => import('@/views/Admin/Defines/MeetingTypes/Index.vue'),
    meta: {
      pageTitle: 'Görüşmenin Türü',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_TYPES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-types/add',
    name: 'MeetingTypesAdd',
    component: () => import('@/views/Admin/Defines/MeetingTypes/Add.vue'),
    meta: {
      pageTitle: 'Görüşmenin Türü',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-types',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_TYPES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-types/edit/:id',
    name: 'MeetingTypesEdit',
    component: () => import('@/views/Admin/Defines/MeetingTypes/Edit.vue'),
    meta: {
      pageTitle: 'Görüşmenin Türü',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-types',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_TYPES_EDIT',
      action: 'read',
    },
  },
]
