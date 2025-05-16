<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <check-box />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
      >
        <customer-request-line />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BRow, BCol,
} from 'bootstrap-vue'
import CustomerRequestLine from '@/views/Admin/Data/CustomerRequests/elements/requestLine.vue'
import CheckBox from '@/views/Admin/Data/CustomerRequests/elements/checkBox.vue'

export default {
  name: 'ItemForm',
  components: {
    BRow,
    BCol,
    CustomerRequestLine,
    CheckBox,
  },
  computed: {
    dataItem() {
      return this.$store.getters['customerRequests/dataItem']
    },
  },
}
</script>
