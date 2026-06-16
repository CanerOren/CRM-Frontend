<template>
  <b-form-group label="Araç Kilometresi">
    <b-form-input
      :value="value"
      type="number"
      placeholder="Araç Kilometresi Giriniz"
      @input="$emit('input', Number($event))"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'OdometerInput',
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
