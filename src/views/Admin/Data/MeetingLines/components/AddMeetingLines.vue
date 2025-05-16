<template>
  <validation-observer ref="simpleRules">

    <b-row>
      <b-col
        cols="12"
        md="6"
      >
        <meeting-contact-type />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <meeting-statuses />
      </b-col>
      <b-col
        cols="12"
        md="12"
      >
        <meeting-line />
      </b-col>
    </b-row>

  </validation-observer>
</template>
<script>
import {
  BCard, BRow, BCol,
} from 'bootstrap-vue'
import MeetingContactType from '@/views/Admin/Data/MeetingLines/elements/meetingContactType.vue'
import MeetingStatuses from '@/views/Admin/Data/MeetingLines/elements/meetingStatuses.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import MeetingLine from '@/views/Admin/Data/MeetingLines/elements/meetingLine.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'
import { required } from '@validations'
import { localize, ValidationObserver } from 'vee-validate'

export default {
  name: 'AddMeetingLines',
  components: {
    BCard,
    BRow,
    BCol,
    MeetingContactType,
    MeetingStatuses,
    MeetingLine,
    SaveButton,
    ValidationObserver,
  },
  data() {
    return {
      submitStatus: false,
      required,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetingLines/dataItem']
    },
    saveData() {
      return this.$store.getters['meetingLines/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        // this.$router.push(`data/meeting-lines/view/${val.id}`)
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
    this.$store.commit('meetingLines/RESET_DATA_ITEM', true)
  },
  methods: {
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('meetingLines/saveData', this.dataItem)
        } else {
          this.showToast({
            title: 'Uyarı!',
            icon: 'XIcon',
            text: 'Lütfen tüm alanları doldurun',
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
