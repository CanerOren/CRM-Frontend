<template>
  <b-form-checkbox
    v-model="heated_seats"
    switch
    @change="updateValue"
  >
    Isıtmalı Koltuklar
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'HeatedSeats',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    heated_seats: {
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
      this.$emit('input', this.heated_seats)
    },
  },
}
</script>
