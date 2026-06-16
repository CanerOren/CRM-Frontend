<template>
  <b-form-group label="Sol Ön Kapı">
    <b-form-select
      v-model="left_front_door"
      :options="options"
      placeholder="Sol Ön Kapı"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'LeftFrontDoorDamage',
  components: { BFormSelect, BFormGroup },
  props: {
    value: String,
  },
  computed: {
    left_front_door: {
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
      this.$emit('input', this.left_front_door)
    },
  },
}
</script>
