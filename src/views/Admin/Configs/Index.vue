<template>
  <validation-observer ref="simpleRules">
    <b-card>
      <b-form-group
        label="Site Alt Bilgisi"
        label-for="footer_text"
      >
        <validation-provider
          #default="{ errors }"
          name="Site Alt Bilgisi"
          rules="required"
        >
          <b-form-input
            id="footer_text"
            v-model="itemData.footer_text"
            placeholder="Site Alt Bilgisi"
          />
          <small class="text-danger">{{ errors[0] }}</small>
        </validation-provider>
      </b-form-group>
      <b-form-group
        label="Google Analtytics İzleme Kodu"
        label-for="analytics"
      >
        <b-form-textarea
          id="analytics"
          v-model="itemData.analytics"
          placeholder="Google Analtytics İzleme Kodu"
        />
      </b-form-group>
      <b-form-group
        label="Meta Pixel Kodu"
        label-for="facebook_pixel"
      >
        <b-form-textarea
          id="facebook_pixel"
          v-model="itemData.facebook_pixel"
          placeholder="Meta Pixel Kodu"
        />
      </b-form-group>
      <b-form-group
        label="Google Search Concole Meta"
        label-for="search_console_meta"
      >
        <b-form-textarea
          id="search_console_meta"
          v-model="itemData.search_console_meta"
          placeholder="Google Search Concole Meta"
        />
      </b-form-group>
      <b-form-group
        label="Google Tag Manager Head"
        label-for="tag_manager_head"
      >
        <b-form-textarea
          id="tag_manager_head"
          v-model="itemData.tag_manager_head"
          placeholder="Google Tag Manager Head"
        />
      </b-form-group>
      <b-form-group
        label="Google Tag Manager Body"
        label-for="tag_manager_body"
      >
        <b-form-textarea
          id="tag_manager_body"
          v-model="itemData.tag_manager_body"
          placeholder="Google Tag Manager Body"
        />
      </b-form-group>
    </b-card>
    <b-button
      variant="primary"
      @click="submitForm"
    >
      Kaydet
    </b-button>
  </validation-observer>
</template>

<script>
import {
  BCard, BFormGroup, BFormInput, BButton, BFormTextarea,
} from 'bootstrap-vue'

import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'Index',
  components: {
    ValidationProvider,
    ValidationObserver,
    BCard,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BButton,

  },
  data() {
    return {
      required,
      imageUrl: this.$store.state.app.baseURL,
    }
  },
  computed: {
    itemData() {
      return this.$store.getters['siteConfig/dataItem']
    },
    saveData() {
      return this.$store.getters['siteConfig/dataSaveStatus']
    },
  },
  watch: {
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
      }
      this.getData()
    },
  },
  created() {
    localize('tr')
    this.getData()
  },
  methods: {
    getData() {
      this.$store.dispatch('siteConfig/getDataItem')
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          this.$store.dispatch('siteConfig/saveData',this.itemData)
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
