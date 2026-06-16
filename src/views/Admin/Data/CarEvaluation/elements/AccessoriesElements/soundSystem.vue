<template>
  <b-form-checkbox
    v-model="sound_system"
    switch
    @change="updateValue"
  >
    Ses Sistemi
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'SoundSystem',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    sound_system: {
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
      this.$emit('input', this.sound_system)
    },
  },
}
</script>
