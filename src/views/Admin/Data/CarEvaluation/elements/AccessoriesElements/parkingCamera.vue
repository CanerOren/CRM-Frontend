<template>
  <b-form-checkbox
    v-model="parking_camera"
    switch
    @change="updateValue"
  >
    Park Kamerası
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'ParkingCamera',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    parking_camera: {
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
      this.$emit('input', this.parking_camera)
    },
  },
}
</script>
