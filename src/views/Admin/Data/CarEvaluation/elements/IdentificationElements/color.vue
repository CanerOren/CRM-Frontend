<template>
  <b-form-group label="Araç Rengi">
    <b-form-select
      v-model="color"
      :options="options"
      placeholder="Araç Rengi Seçiniz"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'ColorInput',
  components: {
    BFormGroup, BFormSelect,
  },
  props: {
    value: String,
  },
  computed: {
    color: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    options() {
      return [
        { value: 'white', text: 'Beyaz' },
        { value: 'black', text: 'Siyah' },
        { value: 'red', text: 'Kırmızı' },
        { value: 'gray', text: 'Gri' },
        { value: 'green', text: 'Yeşil' },
        { value: 'yellow', text: 'Sarı' },
        { value: 'orange', text: 'Turuncu' },
        { value: 'silver', text: 'Gümüş' },
        { value: 'blue', text: 'Mavi' },
        { value: 'dark_blue', text: 'Koyu Mavi' },
        { value: 'champagne', text: 'Şampanya' },
        { value: 'gold', text: 'Altın' },
        { value: 'brown', text: 'Kahverengi' },
        { value: 'beige', text: 'Bej' },
        { value: 'other', text: 'Diğer' },
      ]
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.color)
    },
  },
}
</script>
