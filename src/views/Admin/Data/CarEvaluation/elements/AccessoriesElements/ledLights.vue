<template>
  <b-form-checkbox
    v-model="led_lights"
    switch
    @change="updateValue"
  >
    Led Farlar
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'LedLights',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    led_lights: {
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
      this.$emit('input', this.led_lights)
    },
  },
}
</script>
