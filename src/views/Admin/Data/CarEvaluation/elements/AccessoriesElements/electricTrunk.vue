<template>
  <b-form-checkbox
    v-model="electric_trunk"
    switch
    @change="updateValue"
  >
    Elektrikli Bagaj Kapağı
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'ElectricTrunk',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    electric_trunk: {
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
      this.$emit('input', this.electric_trunk)
    },
  },
}
</script>
