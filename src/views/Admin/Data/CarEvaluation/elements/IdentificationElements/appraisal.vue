<template>
  <b-form-group label="Araç Değeri">
    <b-form-input
      :value="value"
      type="number"
      placeholder="Araç Değeri Giriniz"
      @input="$emit('input', Number($event))"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'AppraisalInput',
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
