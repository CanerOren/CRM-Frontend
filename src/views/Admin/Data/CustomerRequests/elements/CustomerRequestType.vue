<template>
  <b-form-group
    label="Müşteri Tipi"
    label-for="id_customer_request_types"
  >
    <validation-provider
      #default="{ errors }"
      name="Müşteri Tipi"
      rules="required"
    >
      <v-select
        id="id_customer_request_types"
        v-model="dataItem.id_customer_request_types"
        :options="customerRequestTypes"
        label="title"
        :reduce="type => type.id"
        placeholder="Seçiniz"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import {
  BFormGroup,
} from 'bootstrap-vue'
import { required } from '@validations'
import vSelect from 'vue-select'

export default {
  name: 'CustomerRequestType',
  components: {
    BFormGroup,
    vSelect,
    ValidationProvider,
  },
  data() {
    return {
      required,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['customerRequests/dataItem']
    },
    customerRequestTypes() {
      return this.$store.getters['customerRequestTypes/dataList']
    },
  },
  created() {
    this.getCustomerRequestTypes()
    localize('tr')
  },
  methods: {
    getCustomerRequestTypes() {
      this.$store.dispatch('customerRequestTypes/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
