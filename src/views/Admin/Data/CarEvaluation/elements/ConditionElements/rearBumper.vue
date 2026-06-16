<template>
  <b-form-group label="Arka Tampon">
    <b-form-select
      v-model="rear_bumper"
      :options="options"
      placeholder="Arka Tampon"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'RearBumperDamage',
  components: { BFormSelect, BFormGroup },
  props: {
    value: String,
  },
  computed: {
    rear_bumper: {
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
      this.$emit('input', this.rear_bumper)
    },
  },
}
</script>
