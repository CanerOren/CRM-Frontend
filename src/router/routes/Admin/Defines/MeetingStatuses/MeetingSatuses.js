export default [
  {
    path: '/app/meeting-statuses',
    name: 'MeetingStatuses',
    component: () => import('@/views/Admin/Defines/MeetingStatuses/Index.vue'),
    meta: {
      pageTitle: 'Görüşmenin Durumu',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_STATUSES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-statuses/add',
    name: 'MeetingStatusesAdd',
    component: () => import('@/views/Admin/Defines/MeetingStatuses/Add.vue'),
    meta: {
      pageTitle: 'Görüşmenin Durumu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-statuses',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_STATUSES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-statuses/edit/:id',
    name: 'MeetingStatusesEdit',
    component: () => import('@/views/Admin/Defines/MeetingStatuses/Edit.vue'),
    meta: {
      pageTitle: 'Görüşmenin Durumu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-statuses',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_STATUSES_EDIT',
      action: 'read',
    },
  },
]
