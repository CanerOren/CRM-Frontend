<template>
  <b-form-group label="Araç Tipi">
    <b-form-input
      :value="value"
      placeholder="Araç Tipi Giriniz"
      @input="$emit('input', $event)"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'BodyInput',
  components: {
    BFormGroup, BFormInput,
  },
  props: {
    value: String,
  },
}
</script>
