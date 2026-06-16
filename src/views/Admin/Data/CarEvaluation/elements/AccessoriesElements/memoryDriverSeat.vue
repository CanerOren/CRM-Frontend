<template>
  <b-form-checkbox
    v-model="memory_driver_seat"
    switch
    @change="updateValue"
  >
    Hafızalı Sürücü Koltuğu
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'MemoryDriverSeat',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    memory_driver_seat: {
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
      this.$emit('input', this.memory_driver_seat)
    },
  },
}
</script>
