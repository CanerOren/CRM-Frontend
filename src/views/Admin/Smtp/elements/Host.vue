<template>
  <b-form-group
    label="Giden Sunucu"
    label-for="host"
  >
    <validation-provider
      #default="{ errors }"
      name="Giden Sunucu"
      rules="required"
    >
      <b-form-input
        id="host"
        v-model="dataItem.host"
        placeholder="Giden Sunucu"
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
  name: 'Host',
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
