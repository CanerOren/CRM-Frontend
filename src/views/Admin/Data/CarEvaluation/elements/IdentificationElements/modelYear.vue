<template>
  <b-form-group label="Araç Model Yılı">
    <b-form-input
      :value="value"
      placeholder="Araç Model Yılı Giriniz"
      @input="$emit('input', $event)"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'ModelYearInput',
  components: {
    BFormGroup, BFormInput,
  },
  props: {
    value: String,
  },
}
</script>
