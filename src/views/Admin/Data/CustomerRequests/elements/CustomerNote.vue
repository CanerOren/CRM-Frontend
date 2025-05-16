<template>
  <b-form-group
    label="Müşteri Notu"
    label-for="customer_note"
  >
    <validation-provider
      #default="{errors}"
      name="Müşteri Notu"
      rules="required"
    >
      <b-form-textarea
        id="customer_note"
        v-model="dataItem.notes"
        placeholder="Müşteri Notu"
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
  name: 'CustomerNote',
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
      return this.$store.getters['customerRequests/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>
<style scoped>

</style>
