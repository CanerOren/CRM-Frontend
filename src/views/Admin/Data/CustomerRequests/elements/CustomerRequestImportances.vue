<template>
  <b-form-group
    label="Müşteri Şikayet/Talep Önem Derecesi"
    label-for="id_customer_request_importances"
  >
    <validation-provider
      #default="{ errors }"
      name="Müşteri Şikayet/Talep Önem Derecesi"
      rules="required"
    >
      <v-select
        id="id_customer_request_importances"
        v-model="dataItem.id_customer_request_importances"
        :options="customerRequestImportances"
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
  name: 'CustomerRequestImportances',
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
    customerRequestImportances() {
      return this.$store.getters['customerRequestImportances/dataList']
    },
  },
  created() {
    this.getCustomerRequestImportances()
    localize('tr')
  },
  methods: {
    getCustomerRequestImportances() {
      this.$store.dispatch('customerRequestImportances/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
