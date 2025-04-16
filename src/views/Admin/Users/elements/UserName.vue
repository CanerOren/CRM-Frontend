<template>
  <b-form-group
    label="Adı Soyadı"
    label-for="name"
  >
    <validation-provider
      #default="{ errors }"
      name="Adı Soyadı"
      rules="required"
    >
      <b-form-input
        id="name"
        v-model="dataItem.name"
        placeholder="Adı Soyadı"
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
  name: 'UserName',
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
      return this.$store.getters['users/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>

<style scoped>

</style>
