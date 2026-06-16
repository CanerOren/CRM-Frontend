<template>
  <b-form-checkbox
    v-model="electric_passenger_seat"
    switch
    @change="updateValue"
  >
    Elektrikli Yolcu Koltuğu
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'ElectricPassengerSeat',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    electric_passenger_seat: {
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
      this.$emit('input', this.electric_passenger_seat)
    },
  },
}
</script>
