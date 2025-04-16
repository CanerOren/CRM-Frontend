<template>
  <b-form-group
    label="Sıra No"
    label-for="ordering"
  >
    <b-form-input
      id="ordering"
      v-model="itemData.ordering"
      placeholder="Sıra No"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'OrderingNumber',
  components: { BFormInput, BFormGroup },
  computed: {
    itemData() {
      return this.$store.getters['productCategories/dataItem']
    },
  },
}
</script>
