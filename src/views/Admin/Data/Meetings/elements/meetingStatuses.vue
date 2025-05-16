<template>
  <b-form-group
    label="Görüşme Durumu"
    label-for="id_meeting_statuses"
  >
    <validation-provider
      #default="{ errors }"
      name="Görüşme Durumu"
      rules="required"
    >
      <v-select
        id="id_meeting_statuses"
        v-model="dataItem.id_meeting_statuses"
        :options="meetingStatuses"
        label="title"
        :reduce="type => type.id"
        placeholder="Seçiniz"
        :disabled="true"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import {
  BFormGroup,
} from 'bootstrap-vue'
import { required } from '@validations'
import vSelect from 'vue-select'

export default {
  name: 'MeetingStatuses',
  components: {
    BFormGroup,
    vSelect,
    ValidationProvider,
  },
  data() {
    return {
      required,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
    meetingStatuses() {
      return this.$store.getters['meetingStatuses/dataList']
    },
  },
  watch: {
    meetingStatuses(newVal) {
      if (newVal.length && !this.dataItem.id_meeting_statuses) {
        this.dataItem.id_meeting_statuses = newVal[0].id
      }
    },
  },
  created() {
    this.getMeetingStatuses()
    localize('tr')
  },
  methods: {
    getMeetingStatuses() {
      this.$store.dispatch('meetingStatuses/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
