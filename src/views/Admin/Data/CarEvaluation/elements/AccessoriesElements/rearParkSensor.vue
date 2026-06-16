<template>
  <b-form-checkbox
    v-model="rear_park_sensor"
    switch
    @change="updateValue"
  >
    Arka Park Sensörü
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'RearParkSensor',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    rear_park_sensor: {
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
      this.$emit('input', this.rear_park_sensor)
    },
  },
}
</script>
