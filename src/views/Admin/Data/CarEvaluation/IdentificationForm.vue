<template>
  <b-card title="Araç Bilgileri">
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <category-input />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <make-input />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <model-input v-model="formData.identification.model" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <model-year-input v-model="formData.identification.modelYear" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <body-input v-model="formData.identification.body" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <engine-input v-model="formData.identification.engine" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <hp-input v-model="formData.identification.hp" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <ccm-input v-model="formData.identification.ccm" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <fuel-type-input v-model="formData.identification.fuelType" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <transmission-input v-model="formData.identification.transmission" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <odometer-input v-model="formData.identification.odometer" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <trim-input v-model="formData.identification.trim" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <appraisal-input v-model="formData.identification.appraisal" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <color-input v-model="formData.identification.color" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <paint-type-input v-model="formData.identification.paint_type" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import CategoryInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/category.vue'
import MakeInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/make.vue'
import ModelInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/model.vue'
import ModelYearInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/modelYear.vue'
import BodyInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/body.vue'
import EngineInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/engine.vue'
import HpInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/hp.vue'
import CcmInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/ccm.vue'
import FuelTypeInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/fuelType.vue'
import TransmissionInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/transmission.vue'
import OdometerInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/odometer.vue'
import TrimInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/trim.vue'
import AppraisalInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/appraisal.vue'
import ColorInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/color.vue'
import PaintTypeInput from '@/views/Admin/Data/CarEvaluation/elements/IdentificationElements/paint_type.vue'

export default {
  name: 'IdentificationForm',
  components: {
    BCard,
    BRow,
    BCol,
    CategoryInput,
    MakeInput,
    ModelInput,
    ModelYearInput,
    BodyInput,
    EngineInput,
    HpInput,
    CcmInput,
    FuelTypeInput,
    TransmissionInput,
    OdometerInput,
    TrimInput,
    AppraisalInput,
    ColorInput,
    PaintTypeInput,
  },
  computed: {
    formData: {
      get() {
        return this.$store.getters['carEvaluation/formData']
      },
      set(value) {
        this.$store.commit('carEvaluation/SET_FORM_DATA', value)
      },
    },
  },
}
</script>
