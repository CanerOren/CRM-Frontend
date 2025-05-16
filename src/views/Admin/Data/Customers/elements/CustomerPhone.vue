<template>
  <b-form-group
    label="Telefon Numarası"
    label-for="phone"
  >
    <validation-provider
      #default="{ errors }"
      name="Telefon Numarası"
      rules="required"
    >
      <b-form-input
        id="phone"
        v-model="dataItem.phone"
        placeholder="Telefon Numarası"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import {
  BFormGroup, BFormInput,
} from 'bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import { required } from '@validations'

export default {
  name: 'CustomerPhone',
  components: {
    BFormGroup,
    BFormInput,
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
