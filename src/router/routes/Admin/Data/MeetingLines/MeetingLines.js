export default [
  {
    path: '/data/meeting-lines',
    name: 'MeetingLines',
    component: () => import('@/views/Admin/Data/MeetingLines/Index.vue'),
    meta: {
      pageTitle: 'Görüşme Notları',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_LINES_LIST',
      action: 'read',
    },
  },
  {
    path: '/data/meeting-lines/add',
    name: 'MeetingLinesAdd',
    component: () => import('@/views/Admin/Data/MeetingLines/Add.vue'),
    meta: {
      pageTitle: 'Görüşme Notları',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/meeting-lines',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_LINES_ADD',
      action: 'read',
    },
  },
  {
    path: '/data/meeting-lines/edit/:id',
    name: 'MeetingLinesEdit',
    component: () => import('@/views/Admin/Data/MeetingLines/Edit.vue'),
    meta: {
      pageTitle: 'Görüşme Notları',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/data/meeting-lines',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_LINES_EDIT',
      action: 'read',
    },
  },
]
