<template>
  <b-form-group
    label="Görüşme Türü"
    label-for="id_meeting_types"
  >
    <validation-provider
      #default="{ errors }"
      name="Görüşme Türü"
      rules="required"
    >
      <v-select
        id="id_meeting_types"
        v-model="dataItem.id_meeting_types"
        :options="meetingTypes"
        label="title"
        :reduce="type => type.id"
        placeholder="Seçiniz"
        @input="onTypeSelected"
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
  name: 'MeetingTypes',
  components: {
    BFormGroup,
    vSelect,
    ValidationProvider,
  },
  data() {
    return {
      required,
      selectedType: null,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
    meetingTypes() {
      return this.$store.getters['meetingTypes/dataList']
    },
  },
  created() {
    this.getMeetingTypes()
    localize('tr')
  },
  methods: {
    getMeetingTypes() {
      this.$store.dispatch('meetingTypes/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
    onTypeSelected(typeId) {
      this.$emit('type-selected', typeId)
      this.dataItem.id_meeting_types = typeId
    },
  },
}
</script>
