<template>
  <b-form-checkbox
    v-model="electric_driver_seat"
    switch
    @change="updateValue"
  >
    Elektrikli Sürücü Koltuğu
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'ElectricDriverSeat',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    electric_driver_seat: {
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
      this.$emit('input', this.electric_driver_seat)
    },
  },
}
</script>
