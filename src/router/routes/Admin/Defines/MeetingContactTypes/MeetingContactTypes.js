export default [
  {
    path: '/app/meeting-contact-types',
    name: 'MeetingContactTypes',
    component: () => import('@/views/Admin/Defines/MeetingContactTypes/Index.vue'),
    meta: {
      pageTitle: 'Görüşmenin Gerçekleşme Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_CONTACT_TYPES_LIST',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-contact-types/add',
    name: 'MeetingContactTypesAdd',
    component: () => import('@/views/Admin/Defines/MeetingContactTypes/Add.vue'),
    meta: {
      pageTitle: 'Görüşmenin Gerçekleşme Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-contact-types',
          active: false,
        },
        {
          text: 'Oluştur',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_CONTACT_TYPES_ADD',
      action: 'read',
    },
  },
  {
    path: '/app/meeting-contact-types/edit/:id',
    name: 'MeetingContactTypesEdit',
    component: () => import('@/views/Admin/Defines/MeetingContactTypes/Edit.vue'),
    meta: {
      pageTitle: 'Görüşmenin Gerçekleşme Tipi',
      breadcrumb: [
        {
          text: 'Liste',
          to: '/app/meeting-contact-types',
          active: false,
        },
        {
          text: 'Güncelle',
          active: true,
        },
      ],
      resource: 'ADMIN_MEETING_CONTACT_TYPES_EDIT',
      action: 'read',
    },
  },
]
