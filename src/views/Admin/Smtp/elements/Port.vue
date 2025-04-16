<template>
  <b-form-group
    label="SMTP Port"
    label-for="port"
  >
    <validation-provider
      #default="{ errors }"
      name="SMTP Port"
      rules="required"
    >
      <b-form-input
        id="port"
        v-model="dataItem.port"
        placeholder="SMTP Port"
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
  name: 'Port',
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
