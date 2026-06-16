<template>
  <b-form-group label="Model">
    <b-form-input
      :value="value"
      placeholder="Model giriniz"
      @input="$emit('input', $event)"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'ModelInput',
  components: {
    BFormGroup, BFormInput,
  },
  props: {
    value: String,
  },
}
</script>
