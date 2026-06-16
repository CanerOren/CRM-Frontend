<template>
  <b-form-group label="Marka">
    <b-form-input
      v-model="dataItem.identification.make"
      placeholder="Marka giriniz"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'MakeInput',
  components: {
    BFormGroup, BFormInput,
  },
  computed: {
    dataItem() {
      return this.$store.getters['carEvaluation/formData']
    },
  },
}
</script>
