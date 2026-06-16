<template>
  <b-form-group label="Araç Paketi">
    <b-form-input
      :value="value"
      placeholder="Araç Paketi Giriniz"
      @input="$emit('input', $event)"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'TrimInput',
  components: {
    BFormGroup, BFormInput,
  },
  props: {
    value: String,
  },
}
</script>
