export default [
  {
    path: '/app/meeting-subjects',
    name: 'MeetingSubjects',
    component: () => import('@/views/Admin/Defines/MeetingSubjects/Index.vue'),
    meta: {
      pageTitle: 'Görüşmenin Konusu',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_SUBJECTS_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-subjects/add',
    name: 'MeetingSubjectsAdd',
    component: () => import('@/views/Admin/Defines/MeetingSubjects/Add.vue'),
    meta: {
      pageTitle: 'Görüşmenin Konusu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-subjects',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_SUBJECTS_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-subjects/edit/:id',
    name: 'MeetingSubjectsEdit',
    component: () => import('@/views/Admin/Defines/MeetingSubjects/Edit.vue'),
    meta: {
      pageTitle: 'Görüşmenin Konusu',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-subjects',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_SUBJECTS_EDIT',
      action: 'read',
    },
  },
]
