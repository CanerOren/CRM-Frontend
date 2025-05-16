<template>
  <div>
    <b-card title="Şirket/Müşteri Bilgileri">
      <b-row>
        <b-col
          cols="12"
          md="6"
        >
          <company-name />
        </b-col>
        <b-col
          cols="12"
          md="3"
        >
          <customer-name />
        </b-col>
        <b-col
          cols="12"
          md="3"
        >
          <customer-last-name />
        </b-col>
        <b-col
          cols="12"
          md="6"
        >
          <customer-d-o-b />
        </b-col>
        <b-col
          cols="12"
          md="6"
        >
          <customer-type />
        </b-col>
      </b-row>
    </b-card>
    <b-card title="İletişim Bilgileri">
      <b-row>
        <b-col
          cols="12"
          md="3"
        >
          <customer-phone />
        </b-col>
        <b-col
          cols="12"
          md="3"
        >
          <customer-email />
        </b-col>
        <b-col
          cols="12"
          md="3"
        >
          <customer-city />
        </b-col>
        <b-col
          cols="12"
          md="3"
        >
          <customer-district />
        </b-col>
        <b-col
          cols="12"
          md="12l"
        >
          <customer-address />
        </b-col>
      </b-row>
    </b-card>
  </div>

</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import CustomerName from '@/views/Admin/Data/Customers/elements/CustomerName.vue'
import CustomerEmail from '@/views/Admin/Data/Customers/elements/CustomerEmail.vue'
import CustomerPhone from '@/views/Admin/Data/Customers/elements/CustomerPhone.vue'
import CustomerLastName from '@/views/Admin/Data/Customers/elements/CustomerLastName.vue'
import CustomerType from '@/views/Admin/Data/Customers/elements/CustomerType.vue'
import CustomerDOB from '@/views/Admin/Data/Customers/elements/CustomerDOB.vue'
import CompanyName from '@/views/Admin/Data/Customers/elements/CompanyName.vue'
import CustomerCity from '@/views/Admin/Data/Customers/elements/CustomerCity.vue'
import CustomerDistrict from '@/views/Admin/Data/Customers/elements/CustomerDistrict.vue'
import CustomerAddress from '@/views/Admin/Data/Customers/elements/CustomerAddress.vue'

export default {
  name: 'CustomerForm',
  components: {

    CustomerLastName,
    BCard,
    BRow,
    BCol,
    CustomerName,
    CustomerEmail,
    CustomerType,
    CustomerPhone,
    CustomerDOB,
    CompanyName,
    CustomerCity,
    CustomerDistrict,
    CustomerAddress,
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
