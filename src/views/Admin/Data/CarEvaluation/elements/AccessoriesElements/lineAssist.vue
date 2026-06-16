<template>
  <b-form-checkbox
    v-model="line_assist"
    switch
    @change="updateValue"
  >
    Şerit Takip Yardımcısı
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'LineAssist',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    line_assist: {
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
      this.$emit('input', this.line_assist)
    },
  },
}
</script>
