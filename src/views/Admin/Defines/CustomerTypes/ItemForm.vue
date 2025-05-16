<template>
  <div>
    <b-card>
      <title-text />

    </b-card>

  </div>
</template>

<script>
import {
  BCard,
} from 'bootstrap-vue'
import TitleText from '@/views/Admin/Defines/CustomerTypes/elements/TitleText.vue'

export default {
  name: 'ItemForm',
  components: {
    BCard,
    TitleText,
  },
  computed: {
    dataItem() {
      return this.$store.getters['customerTypes/dataItem']
    },
  },
}
</script>
