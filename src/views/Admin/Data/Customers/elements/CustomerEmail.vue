<template>
  <b-form-group
    label="E-Posta"
    label-for="email"
  >
    <validation-provider
      #default="{ errors }"
      name="E-Posta"
      rules="required"
    >
      <b-form-input
        id="email"
        v-model="dataItem.email"
        placeholder="E-Posta"
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
  name: 'CustomerName',
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
