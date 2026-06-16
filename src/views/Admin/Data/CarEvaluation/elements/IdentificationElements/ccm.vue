<template>
  <b-form-group label="Araç Motoru">
    <b-form-input
      :value="value"
      type="number"
      placeholder="Araç Motoru Giriniz"
      @input="$emit('input', Number($event))"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'CCMInput',
  components: {
    BFormGroup,
    BFormInput,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>
