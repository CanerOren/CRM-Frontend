<template>
  <validation-observer ref="simpleRules">
    <meeting-form />
    <save-button
      :is-disabled="submitStatus"
      :save-action="submitForm"
    />
  </validation-observer>
</template>

<script>

import { ValidationObserver, localize } from 'vee-validate'
import { required } from '@core/utils/validations/validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import MeetingForm from '@/views/Admin/Data/Meetings/MeetingForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'

export default {
  name: 'Add',
  components: {
    ValidationObserver,
    MeetingForm,
    SaveButton,
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
    },
  },
  created() {
    localize('tr')
    this.$store.commit('meetings/RESET_DATA_ITEM', true)
  },
  methods: {
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.dataItem.id_customers = Number(this.$route.params.id)
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
