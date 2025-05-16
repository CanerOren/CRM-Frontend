<template>
  <validation-observer ref="simpleRules">
    <customer-request-form />
    <save-button
      :is-disabled="submitStatus"
      :save-action="submitForm"
    />
  </validation-observer>
</template>

<script>

import { ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import CustomerRequestForm from '@/views/Admin/Data/CustomerRequests/CustomerRequestForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'

export default {
  name: 'Edit',
  components: {
    CustomerRequestForm,
    ValidationObserver,
    SaveButton,
  },
  data() {
    return {
      submitStatus: false,
      required,
    }
  },
  computed: {
    dataItemCustomerRequests() {
      return this.$store.getters['customerRequests/dataItem']
    },
    saveData() {
      return this.$store.getters['customerRequests/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.$router.push('/data/customer-requests')
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
        this.submitStatus = false
      }
      this.getDataCustomerRequests()
    },
  },
  created() {
    this.getDataCustomerRequests()
    localize('tr')
  },
  methods: {
    getDataCustomerRequests() {
      this.$store.dispatch('customerRequests/getDataItem', this.$route.params.id)
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('customerRequests/saveData', this.dataItemCustomerRequests)
        } else {
          this.showToast({
            title: 'Uyarı!',
            icon: 'XIcon',
            text: 'Lütfen tüm alanları doldurun.',
            variant: 'danger',
          })
        }
      })
    },
    showToast(params) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: params.title,
          icon: params.icon,
          text: params.text,
          variant: params.variant,
        },
      }, {
        position: 'bottom-center',
      })
    },
  },
}
</script>
