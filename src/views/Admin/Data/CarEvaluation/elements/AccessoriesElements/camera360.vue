<template>
  <b-form-checkbox
    v-model="camera_360"
    switch
    @change="updateValue"
  >
    360 Kamera
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'Camera360',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    camera_360: {
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
      this.$emit('input', this.camera_360)
    },
  },
}
</script>
