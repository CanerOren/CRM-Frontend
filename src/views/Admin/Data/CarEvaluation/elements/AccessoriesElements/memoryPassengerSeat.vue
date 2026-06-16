<template>
  <b-form-checkbox
    v-model="memory_passenger_seat"
    switch
    @change="updateValue"
  >
    Hafızalı Yolcu Koltuğu
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'MemoryPassengerSeat',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    memory_passenger_seat: {
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
      this.$emit('input', this.memory_passenger_seat)
    },
  },
}
</script>
