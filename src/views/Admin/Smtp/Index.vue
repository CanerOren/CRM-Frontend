<template>
  <validation-observer ref="simpleRules">
    <smtp-form />
    <save-button
      :save-action="submitForm"
      :is-disabled="submitStatus"
    />
  </validation-observer>
</template>
<script>
import { ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'
import SmtpForm from '@/views/Admin/Smtp/SmtpForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'Index',
  components: {
    SmtpForm,
    SaveButton,
    ValidationObserver,
  },
  data() {
    return {
      required,
      submitStatus: false,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['smtpConfig/dataItem']
    },
    saveData() {
      return this.$store.getters['smtpConfig/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.submitStatus = false
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
        this.submitStatus = false
      }
    },
  },
  created() {
    this.getData()
    localize('tr')
  },
  methods: {
    getData() {
      this.$store.dispatch('smtpConfig/getDataItem', this.$route.params.id)
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('smtpConfig/saveData', this.dataItem)
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
      })
    },
  },
}
</script>
