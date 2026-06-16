<template>
  <b-form-checkbox
    v-model="black_roof"
    switch
    @change="updateValue"
  >
    Siyah Tavan
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'BlackRoof',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    black_roof: {
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
      this.$emit('input', this.black_roof)
    },
  },
}
</script>
