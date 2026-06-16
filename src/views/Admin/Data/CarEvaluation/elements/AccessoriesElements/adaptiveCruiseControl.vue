<template>
  <b-form-checkbox
    v-model="adaptive_cruise_control"
    switch
    @change="updateValue"
  >
    Adaptif Hız Kontorlü
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'AdaptiveCruiseControl',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    adaptive_cruise_control: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.adaptive_cruise_control)
    },
  },
}
</script>
