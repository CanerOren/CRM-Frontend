<template>
  <div>
    <b-card>
      <title-text />
      <ordering-number />
    </b-card>
    <image-card />
  </div>
</template>

<script>
import {
  BCard,
} from 'bootstrap-vue'
import TitleText from '@/views/Admin/Product_categories/elements/TitleText.vue'
import OrderingNumber from '@/views/Admin/Product_categories/elements/OrderingNumber.vue'
import ImageCard from '@/views/Admin/Product_categories/elements/Image.vue'

export default {
  name: 'ItemForm',
  components: {
    BCard,
    TitleText,
    OrderingNumber,
    ImageCard,
  },
  computed: {
    dataItem() {
      return this.$store.getters['productCategories/dataItem']
    },
  },
}
</script>
