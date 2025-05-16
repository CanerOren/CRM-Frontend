<template>
  <b-form-group
    label="Müşteri Tipi"
    label-for="id_customer_types"
  >
    <validation-provider
      #default="{ errors }"
      name="Müşteri Tipi"
      rules="required"
    >
      <v-select
        id="id_customer_types"
        v-model="dataItem.id_customer_types"
        :options="customerTypes"
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
  name: 'CustomerType',
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
      return this.$store.getters['customers/dataItem']
    },
    customerTypes() {
      return this.$store.getters['customerTypes/dataList']
    },
  },
  created() {
    this.getCustomerTypes()
    localize('tr')
  },
  methods: {
    getCustomerTypes() {
      this.$store.dispatch('customerTypes/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
