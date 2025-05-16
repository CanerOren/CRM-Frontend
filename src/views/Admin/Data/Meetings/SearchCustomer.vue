<template>
  <div>
    <customer-search next-action="/data/meetings/add/" />
  </div>
</template>

<script>

import { required } from '@core/utils/validations/validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import CustomerSearch from '@/views/Admin/Data/Customers/components/search.vue'

export default {
  name: 'Edit',
  components: {
    CustomerSearch
    ,
  },
  data() {
    return {
      submitStatus: false,
      required,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
    saveData() {
      return this.$store.getters['meetings/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.$router.push('/data/meetings')
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
        this.submitStatus = false
      }
      this.getData()
    },
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$store.dispatch('meetings/getDataItem', this.$route.params.id)
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('meetings/saveData', this.dataItem)
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
