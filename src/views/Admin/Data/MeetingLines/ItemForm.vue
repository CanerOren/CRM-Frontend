<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <meeting-contact-type />
        </b-col>
      </b-row>
    </b-card>

  </div>
</template>

<script>
import {
  BCard, BRow, BCol,
} from 'bootstrap-vue'
import MeetingContactType from '@/views/Admin/Data/MeetingLines/elements/meetingContactType.vue'

export default {
  name: 'ItemForm',
  components: {
    BCard,
    BRow,
    BCol,
    MeetingContactType,
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetingLines/dataItem']
    },
  },
}
</script>
