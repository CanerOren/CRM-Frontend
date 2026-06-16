<template>
  <b-form-checkbox
    v-model="blind_spot_alarm"
    switch
    @change="updateValue"
  >
    Kör Nokta Uyarısı
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'BlindSpotAlarm',
  components: { BFormCheckbox },
  props: {
    value: Boolean,
  },
  computed: {
    blind_spot_alarm: {
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
      this.$emit('input', this.blind_spot_alarm)
    },
  },
}
</script>
