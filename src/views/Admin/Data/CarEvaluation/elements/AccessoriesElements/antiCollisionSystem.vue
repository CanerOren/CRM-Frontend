<template>
  <b-form-checkbox
    v-model="anti_collision_system"
    switch
    @change="updateValue"
  >
    Çarpışma Önleyici Sistem
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'AntiCollisionSystem',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    anti_collision_system: {
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
      this.$emit('input', this.anti_collision_system)
    },
  },
}
</script>
