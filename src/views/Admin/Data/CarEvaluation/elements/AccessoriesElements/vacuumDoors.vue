<template>
  <b-form-checkbox
    v-model="vacuum_doors"
    switch
    @change="updateValue"
  >
    Vakumlu Kapılar
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'VacuumDoors',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    vacuum_doors: {
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
      this.$emit('input', this.vacuum_doors)
    },
  },
}
</script>
