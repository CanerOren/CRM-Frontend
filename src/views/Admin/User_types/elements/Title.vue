<template>
  <b-form-group
    label="Başlık"
    label-for="title"
  >
    <validation-provider
      #default="{ errors }"
      name="Başlık"
      rules="required"
    >
      <b-form-input
        id="title"
        v-model="dataItem.title"
        placeholder="Başlık"
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
  name: 'Title',
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
      return this.$store.getters['userTypes/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>

<style scoped>

</style>
