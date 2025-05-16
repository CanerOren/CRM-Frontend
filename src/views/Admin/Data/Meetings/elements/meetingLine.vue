<template>
  <b-form-group
    label="Görüşme Notu"
    label-for="meeting_line"
  >
    <validation-provider
      #default="{errors}"
      name="Görüşme Notu"
      rules="required"
    >
      <b-form-textarea
        id="meeting_line"
        v-model="dataItem.meeting_content"
        placeholder="Görüşme Notu"
        rows="3"
        max-rows="6"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>

  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import { BFormGroup, BFormTextarea } from 'bootstrap-vue'
import { required } from '@validations'

export default {
  name: 'MeetingLine',
  components: {
    BFormGroup,
    BFormTextarea,
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
  },
  created() {
    localize('tr')
  },
}
</script>
<style scoped>

</style>
