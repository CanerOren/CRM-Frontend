<template>
  <b-form-checkbox
    v-model="electric_folding_side_mirrors"
    switch
    @change="updateValue"
  >
    Elektrikli Katlanabilir Yan Aynalar
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'ElectricFoldingSideMirrors',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    electric_folding_side_mirrors: {
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
      this.$emit('input', this.electric_folding_side_mirrors)
    },
  },
}
</script>
