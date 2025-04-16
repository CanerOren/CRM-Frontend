<template>
  <b-form-group
    label="Kullanıcı Adı"
    label-for="user"
  >
    <validation-provider
      #default="{ errors }"
      name="Kullanıcı Adı"
      rules="required"
    >
      <b-form-input
        id="user"
        v-model="dataItem.user"
        placeholder="Kullanıcı Adı"
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
import { required } from '@validations'

export default {
  name: 'User',
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
