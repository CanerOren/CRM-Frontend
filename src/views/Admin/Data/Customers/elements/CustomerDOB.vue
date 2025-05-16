<template>
  <b-form-group
    label="Doğum Tarihi"
    label-for="dob"
  >
    <validation-provider
      #default="{ errors }"
      name="Doğum Tarihi"
      rules="required"
    >
      <b-form-datepicker
        id="dob"
        v-model="dataItem.date_of_birth"
        class="mb-2"
        placeholder="Tarih Seçiniz"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormDatepicker } from 'bootstrap-vue'
import { ValidationProvider, localize } from 'vee-validate'
// eslint-disable-next-line no-unused-vars
import { required } from '@validations'

export default {
  name: 'CustomerDOB',
  components: {
    BFormGroup,
    BFormDatepicker,
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
