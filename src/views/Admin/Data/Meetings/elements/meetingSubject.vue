<template>
  <b-form-group
    label="Konu"
    label-for="id_meeting_subjects"
  >
    <validation-provider
      #default="{ errors }"
      name="Konu"
      rules="required"
    >
      <v-select
        id="id_meeting_subjects"
        v-model="dataItem.id_meeting_subjects"
        :options="meetingSubjects"
        label="title"
        :reduce="type => type.id"
        placeholder="Seçiniz"
        @input="onSubjectSelected"
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
  name: 'MeetingSubjects',
  components: {
    BFormGroup,
    vSelect,
    ValidationProvider,
  },
  data() {
    return {
      required,
      selectedSubject: null,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
    meetingSubjects() {
      return this.$store.getters['meetingSubjects/dataList']
    },
  },
  created() {
    this.getMeetingSubjects()
    localize('tr')
  },
  methods: {
    getMeetingSubjects() {
      this.$store.dispatch('meetingSubjects/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
    onSubjectSelected(subjectId) {
      this.$emit('subject-selected', subjectId)
      this.dataItem.id_meeting_subjects = subjectId
    },
  },
}
</script>
