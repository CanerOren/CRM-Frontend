<template>
  <validation-observer ref="simpleRules">
    <item-form />
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
import ItemForm from '@/views/Admin/Defines/MeetingSubjects/ItemForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'

export default {
  name: 'Edit',
  components: {
    SaveButton,
    ValidationObserver,
    ItemForm,

  },
  data() {
    return {
      submitStatus: false,
      required,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetingSubjects/dataItem']
    },
    saveData() {
      return this.$store.getters['meetingSubjects/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.$router.push('/app/meeting-subjects')
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
    localize('tr')
  },
  methods: {
    getData() {
      this.$store.dispatch('meetingSubjects/getDataItem', this.$route.params.id)
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('meetingSubjects/saveData', this.dataItem)
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
