<template>
  <b-form-checkbox
    v-model="xenon_lights"
    switch
    @change="updateValue"
  >
    Xenon Farlar
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'XenonLights',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    xenon_lights: {
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
      this.$emit('input', this.xenon_lights)
    },
  },
}
</script>
