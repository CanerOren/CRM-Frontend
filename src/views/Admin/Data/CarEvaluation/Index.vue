<template>
  <validation-observer ref="indicataForm">
    <main-form />
    <b-row v-if="responsePrice">
      <b-col
        cols="12"
        md="12"
      >
        <b-alert
          variant="info"
          show
        >
          <div class="alert-body text-center">
            Önerilen Araç Fiyatı <span class="font-weight-bolder">{{ responsePrice }}</span>
          </div>
        </b-alert>
      </b-col>
    </b-row>
    <save-button
      :is-disabled="submitStatus"
      :save-action="submitForm"
    />
  </validation-observer>
</template>

<script>
import SaveButton from '@/layouts/components/common/SaveButton.vue'
import { ValidationObserver } from 'vee-validate'
import MainForm from '@/views/Admin/Data/CarEvaluation/MainForm.vue'
import { BRow, BCol, BAlert } from 'bootstrap-vue'

export default {
  name: 'IndicataAdd',
  components: {
    ValidationObserver,
    MainForm,
    SaveButton,
    BRow,
    BCol,
    BAlert,
  },
  data() {
    return {
      submitStatus: false,
      responsePrice: null,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['carEvaluation/formData']
    },
  },
  methods: {
    submitForm() {
      this.$refs.indicataForm.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.$store.dispatch('carEvaluation/getDataItem', this.dataItem)
            .then(response => {
              if (response) {
                this.responsePrice = response
              }
            })
        } else {
          this.$toast({
            title: 'Uyarı!',
            icon: 'XIcon',
            text: 'Lütfen tüm alanları doldurun.',
            variant: 'danger',
          })
        }
      })
    },
  },
}
</script>
