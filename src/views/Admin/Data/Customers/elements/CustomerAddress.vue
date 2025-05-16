<template>
  <b-form-group
    label="Adres"
    label-for="address"
  >
    <validation-provider
      #default="{errors}"
      name="Adres"
      rules="required"
    >
      <b-form-textarea
        id="address"
        v-model="dataItem.address"
        placeholder="Adres"
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
  name: 'CustomerAddress',
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
      return this.$store.getters['customers/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>
<style scoped>

</style>
