<template>
  <b-form-checkbox
    v-model="front_camera"
    switch
    @change="updateValue"
  >
    Ön Kamera
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'FrontCamera',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    front_camera: {
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
      this.$emit('input', this.front_camera)
    },
  },
}
</script>
