<template>
  <b-form-group label="Vites Tipi">
    <b-form-select
      v-model="transmission"
      :options="options"
      placeholder="Vites Tipi seçiniz"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'TransmissionInput',
  components: {
    BFormGroup, BFormSelect,
  },
  props: {
    value: String,
  },
  computed: {
    transmission: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    options() {
      return [
        { value: 'Automatic', text: 'Otomatik' },
        { value: 'Manual', text: 'Manuel' },
        { value: 'Semiautomatic', text: 'Yarı Otomatik' },
      ]
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.transmission)
    },
  },
}
</script>
