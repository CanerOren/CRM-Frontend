<template>
  <b-form-group label="Yakıt Tipi">
    <b-form-select
      v-model="fuelType"
      :options="options"
      placeholder="Yakıt Tipi seçiniz"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'FuelTypeInput',
  components: {
    BFormGroup, BFormSelect,
  },
  props: {
    value: String,
  },
  computed: {
    fuelType: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    options() {
      return [
        { value: 'Benzin', text: 'Benzin' },
        { value: 'Diesel', text: 'Dizel' },
        { value: 'LPG', text: 'LPG' },
        { value: 'Hybrid', text: 'Hibrid' },
        { value: 'Electric', text: 'Elektrik' },
        { value: 'BI', text: 'BI' },
        { value: 'Cell', text: 'Cell' },
        { value: 'Hybrid Benzin', text: 'Hibrid Benzin' },
        { value: 'Hybrid Diesel', text: 'Hibrid Dizel' },
        { value: 'Hydrogen', text: 'Hidrojen' },
      ]
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.fuelType)
    },
  },
}
</script>
