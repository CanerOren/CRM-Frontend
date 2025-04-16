<template>
  <b-form-group
    label="Parola"
    label-for="pass"
  >
    <validation-provider
      #default="{ errors }"
      name="Parola"
      rules="required"
    >
      <b-form-input
        id="pass"
        v-model="dataItem.pass"
        placeholder="Parola"
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
  name: 'Password',
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
      return this.$store.getters['smtpConfig/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>
