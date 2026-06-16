<template>
  <b-form-checkbox
    v-model="sunroof.accessories.sunroof"
    switch
  >
    Sunroof
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'Sunroof',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    sunroof() {
      return this.$store.getters['carEvaluation/formData']
    },
  },
}
</script>
