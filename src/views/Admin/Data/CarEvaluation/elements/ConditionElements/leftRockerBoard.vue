<template>
  <b-form-group label="Sol Marşpiyel">
    <b-form-select
      v-model="left_rocker_board"
      :options="options"
      placeholder="Sol Marşpiyel"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'LeftRockerBoardDamage',
  components: { BFormSelect, BFormGroup },
  props: {
    value: String,
  },
  computed: {
    left_rocker_board: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    options() {
      return [
        { value: 'original', text: 'Orijinal' },
        { value: 'painted', text: 'Boyalı' },
        { value: 'local_painted', text: 'Lokal Boyalı' },
        { value: 'replaced', text: 'Değişen' },
      ]
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.left_rocker_board)
    },
  },
}
</script>
