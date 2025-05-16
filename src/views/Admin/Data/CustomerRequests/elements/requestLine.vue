<template>
  <b-form-group
    label="Cevap"
    label-for="customer_request_line_title"
  >
    <validation-provider
      #default="{errors}"
      name="Cevap"
      rules="required"
    >
      <b-form-textarea
        id="customer_request_line_title"
        v-model="dataItem.title"
        placeholder="Cevap"
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
  name: 'CustomerRequestLine',
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
      return this.$store.getters['customerRequestLines/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>
<style scoped>

</style>
