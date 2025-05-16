<template>
  <b-form-group
    label="İletişim Türü"
    label-for="id_meeting_contact_types"
  >
    <validation-provider
      #default="{ errors }"
      name="İletişim Türü"
      rules="required"
    >
      <v-select
        id="id_meeting_contact_types"
        v-model="dataItem.id_meeting_contact_types"
        :options="meetingContactTypes"
        label="title"
        :reduce="type => type.id"
        placeholder="Seçiniz"
        @input="onContactTypeSelected"
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
  name: 'MeetingContactTypes',
  components: {
    BFormGroup,
    vSelect,
    ValidationProvider,
  },
  data() {
    return {
      required,
      selectedContactType: null,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
    meetingContactTypes() {
      return this.$store.getters['meetingContactTypes/dataList']
    },
  },
  created() {
    this.getMeetingContactTypes()
    localize('tr')
  },
  methods: {
    getMeetingContactTypes() {
      this.$store.dispatch('meetingContactTypes/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
    onContactTypeSelected(contactTypeId) {
      this.$emit('contact-type-selected', contactTypeId)
      this.dataItem.id_meeting_contact_types = contactTypeId
    },
  },
}
</script>
