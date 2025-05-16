<template>
  <validation-observer ref="simpleRules">
    <user-type-form />
    <save-button
      :save-action="submitForm"
      :is-disabled="submitStatus"
    />
  </validation-observer>
</template>
<script>
import { ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'
import UserTypeForm from '@/views/Admin/User_types/UserTypeForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'
// eslint-disable-next-line import/extensions
import ToastificationContent from '@core/components/toastification/ToastificationContent'

export default {
  name: 'Add',
  components: {
    UserTypeForm,
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
      return this.$store.getters['userTypes/dataItem']
    },
    saveData() {
      return this.$store.getters['userTypes/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.$router.push(`/admin/user-types/edit/${val.id.id}`)
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
      }
    },
  },
  created() {
    this.$store.commit('userTypes/RESET_DATA_ITEM')
    localize('tr')
  },
  methods: {
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('userTypes/saveData', this.dataItem)
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
