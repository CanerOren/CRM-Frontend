<template>
  <b-form-checkbox
    v-model="panorama_roof"
    switch
    @change="updateValue"
  >
    Panoramik Tavan
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'PanoramaRoof',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    panorama_roof: {
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
      this.$emit('input', this.panorama_roof)
    },
  },
}
</script>
