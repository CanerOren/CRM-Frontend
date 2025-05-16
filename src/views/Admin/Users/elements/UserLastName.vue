<template>
  <b-form-group
    label="Soyadı"
    label-for="lastname"
  >
    <validation-provider
      #default="{ errors }"
      name="Soyadı"
      rules="required"
    >
      <b-form-input
        id="lastname"
        v-model="dataItem.lastname"
        placeholder="Soyadı"
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
  name: 'UserLastName',
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
