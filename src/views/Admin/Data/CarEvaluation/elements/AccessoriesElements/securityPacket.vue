<template>
  <b-form-checkbox
    v-model="security_packet"
    switch
    @change="updateValue"
  >
    Güvenlik Paketi
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'SecurityPacket',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    security_packet: {
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
      this.$emit('input', this.security_packet)
    },
  },
}
</script>
