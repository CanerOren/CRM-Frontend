<template>
  <div>
    <b-card title="Görüşme Konusu">
      <b-row>
        <b-col
          cols="12"
        >
          <meeting-subjects @subject-selected="onSubjectSelected" />
        </b-col>
      </b-row>
    </b-card>
    <b-card
      v-if="isSubjectSelected"
      title="Görüşme Bilgileri"
    >
      <b-row>
        <b-col
          cols="12"
          md="4"
        >
          <meeting-contact-types @contact-type-selected="onContactTypeSelected" />
        </b-col>
        <b-col
          cols="12"
          md="4"
        >
          <meeting-statuses />
        </b-col>
        <b-col
          cols="12"
          md="4"
        >
          <meeting-types @type-selected="onTypeSelected" />
        </b-col>
      </b-row>
    </b-card>
    <b-card v-if="isContactTypeSelected && isTypeSelected">
      <b-row>
        <b-col>
          <meeting-lines />
        </b-col>
      </b-row>
    </b-card>
  </div>

</template>

<script>
import {
  BCard, BRow, BCol,
} from 'bootstrap-vue'
import MeetingSubjects from '@/views/Admin/Data/Meetings/elements/meetingSubject.vue'
import MeetingContactTypes from '@/views/Admin/Data/Meetings/elements/meetingContactType.vue'
import MeetingStatuses from '@/views/Admin/Data/Meetings/elements/meetingStatuses.vue'
import MeetingTypes from '@/views/Admin/Data/Meetings/elements/meetingType.vue'
import MeetingLines from '@/views/Admin/Data/Meetings/elements/meetingLine.vue'

export default {
  name: 'MeetingForm',
  components: {
    MeetingStatuses,
    MeetingContactTypes,
    BCard,
    BRow,
    BCol,
    MeetingSubjects,
    MeetingTypes,
    MeetingLines,
  },
  data() {
    return {
      isSubjectSelected: false,
      isContactTypeSelected: false,
      isTypeSelected: false,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
  },
  methods: {
    onSubjectSelected(subjectId) {
      this.isSubjectSelected = !!subjectId
    },
    onContactTypeSelected(contactTypeId) {
      this.isContactTypeSelected = !!contactTypeId
    },
    onTypeSelected(typeId) {
      this.isTypeSelected = !!typeId
    },
  },
}
</script>
