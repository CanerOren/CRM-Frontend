<template>
  <b-form-group
    label="Müşteri Şikayet/Talep Konusu"
    label-for="id_customer_request_subjects"
  >
    <validation-provider
      #default="{ errors }"
      name="Müşteri Şikayet/Talep Konusu"
      rules="required"
    >
      <v-select
        id="id_customer_request_subjects"
        v-model="dataItem.id_customer_request_subjects"
        :options="customerRequestSubjects"
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
  name: 'CustomerRequestSubjects',
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
    customerRequestSubjects() {
      return this.$store.getters['customerRequestSubjects/dataList']
    },
  },
  created() {
    this.getCustomerRequestSubjects()
    localize('tr')
  },
  methods: {
    getCustomerRequestSubjects() {
      this.$store.dispatch('customerRequestSubjects/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
