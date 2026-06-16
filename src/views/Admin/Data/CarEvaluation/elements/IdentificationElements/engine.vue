<template>
  <b-form-group label="Motor Tipi">
    <b-form-input
      :value="value"
      placeholder="Motor Tipi Giriniz"
      @input="$emit('input', $event)"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'EngineInput',
  components: {
    BFormGroup, BFormInput,
  },
  props: {
    value: String,
  },
}
</script>
