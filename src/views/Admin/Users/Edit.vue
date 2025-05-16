<template>
  <validation-observer ref="simpleRules">
    <user-form />
    <save-button
      :save-action="submitForm"
      :is-disabled="submitStatus"
    />
  </validation-observer>
</template>
<script>
import { ValidationObserver, localize } from 'vee-validate'
// eslint-disable-next-line no-unused-vars
import { required } from '@validations'
import UserForm from '@/views/Admin/Users/UserForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'
// eslint-disable-next-line import/extensions
import ToastificationContent from '@core/components/toastification/ToastificationContent'

export default {
  name: 'Edit',
  components: {
    UserForm,
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
      return this.$store.getters['users/dataItem']
    },
    saveData() {
      return this.$store.getters['users/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.$router.push('/admin/users')
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
      }
    },
  },
  created() {
    this.getData()
    localize('tr')
  },
  methods: {
    getData() {
      this.$store.dispatch('users/getDataItem', this.$route.params.id)
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('users/saveData', this.dataItem)
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
