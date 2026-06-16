<template>
  <b-form-group label="Sağ Ön Çamurluk ">
    <b-form-select
      v-model="right_front_fender"
      :options="options"
      placeholder="Sağ Ön Çamurluk"
      @change="updateValue"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'RightFrontFenderDamage',
  components: { BFormSelect, BFormGroup },
  props: {
    value: String,
  },
  computed: {
    right_front_fender: {
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
      this.$emit('input', this.right_front_fender)
    },
  },
}
</script>
