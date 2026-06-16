<template>
  <b-form-checkbox
    v-model="ventilated_seats"
    switch
    @change="updateValue"
  >
    Soğutmalı Koltuklar
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'VentilatedSeats',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    ventilated_seats: {
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
      this.$emit('input', this.ventilated_seats)
    },
  },
}
</script>
