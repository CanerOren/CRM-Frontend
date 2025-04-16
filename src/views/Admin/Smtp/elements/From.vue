<template>
  <b-form-group
    label="Gönderen"
    label-for="from"
  >
    <validation-provider
      #default="{ errors }"
      name="Gönderen"
      rules="required"
    >
      <b-form-input
        id="from"
        v-model="dataItem.from"
        placeholder="Gönderen"
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
  name: 'From',
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
