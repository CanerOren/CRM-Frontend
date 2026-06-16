<template>
  <b-form-checkbox
    v-model="two_color"
    switch
    @change="updateValue"
  >
    Çift Renk
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'TwoColor',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    two_color: {
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
      this.$emit('input', this.two_color)
    },
  },
}
</script>
