<template>
  <b-form-group label="Kategori">
    <b-form-select
      v-model="dataItem.identification.category"
      :options="options"
      placeholder="Kategori seçiniz"
    />
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormSelect } from 'bootstrap-vue'

export default {
  name: 'CategoryInput',
  components: {
    BFormGroup, BFormSelect,
  },
  data() {
    return {
      options: [
        { value: 'COMMERCIAL', text: 'Ticari (COMMERCIAL)' },
        { value: 'PASSENGER', text: 'Binek (PASSENGER)' },
      ],
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['carEvaluation/formData']
    },
  },
}
</script>
