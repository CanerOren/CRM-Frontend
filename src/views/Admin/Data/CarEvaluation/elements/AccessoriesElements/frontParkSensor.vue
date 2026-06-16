<template>
  <b-form-checkbox
    v-model="front_park_sensor"
    switch
    @change="updateValue"
  >
    Ön Park Sensörü
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'FrontParkSensor',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    front_park_sensor: {
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
      this.$emit('input', this.front_park_sensor)
    },
  },
}
</script>
