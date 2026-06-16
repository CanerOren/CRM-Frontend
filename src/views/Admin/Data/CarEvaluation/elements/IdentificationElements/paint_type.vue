<template>
  <b-form-group label="Araç Boya Tipi">
    <b-form-select
      v-model="paint_type"
      :options="options"
      placeholder="Araç Boya Tipi Seçiniz"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'PaintTypeInput',
  components: {
    BFormGroup, BFormSelect,
  },
  props: {
    value: String,
  },
  computed: {
    paint_type: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    options() {
      return [
        { value: 'metallic', text: 'Metalik' },
        { value: 'solid', text: ' Düz (Opak)' },
        { value: 'matt', text: 'Mat' },
        { value: 'wrapped', text: 'Kaplama' },
      ]
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.paint_type)
    },
  },
}
</script>
