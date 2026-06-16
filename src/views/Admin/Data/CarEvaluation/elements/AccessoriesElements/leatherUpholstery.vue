<template>
  <b-form-checkbox
    v-model="leather_upholstery"
    switch
    @change="updateValue"
  >
    Deri Döşeme
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'LeatherUpholstery',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    leather_upholstery: {
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
      this.$emit('input', this.leather_upholstery)
    },
  },
}
</script>
