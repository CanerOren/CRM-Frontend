<template>
  <b-button
    variant="primary"
    :disabled="isDisabled"
    @click="saveAction"
  >
    Kaydet
  </b-button>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  name: 'SaveButton',
  components: {
    BButton,
  },
  props: {
    saveAction: {
      type: Function,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
