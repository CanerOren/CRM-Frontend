<template>
  <b-form-group
    label="Görüşme Durumu"
    label-for="id_customer_request_statuses"
  >
    <validation-provider
      #default="{ errors }"
      name="Görüşme Durumu"
      rules="required"
    >
      <v-select
        id="id_customer_request_statuses"
        v-model="dataItem.id_customer_request_statuses"
        :options="customerRequestStatuses"
        label="title"
        :reduce="type => type.id"
        placeholder="Seçiniz"
        :disabled="true"
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
  name: 'CustomerRequestStatuses',
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
    customerRequestStatuses() {
      return this.$store.getters['customerRequestStatuses/dataList']
    },
  },
  watch: {
    customerRequestStatuses(newVal) {
      if (newVal.length && !this.dataItem.id_customer_request_statuses) {
        this.dataItem.id_customer_request_statuses = newVal[0].id
      }
    },
  },
  created() {
    this.getCustomerRequestStatuses()
    localize('tr')
  },
  methods: {
    getCustomerRequestStatuses() {
      this.$store.dispatch('customerRequestStatuses/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
