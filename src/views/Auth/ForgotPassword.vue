<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <app-logo />
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Forgot password"
          />
        </div>
      </b-col>
      <!-- /Left Text-->
      <!-- Forgot password-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Parolanızı mı unuttunuz?
          </b-card-title>
          <b-card-text class="mb-2">
            Parolanızı Sıfırlayın.
          </b-card-text>

          <!-- form -->
          <validation-observer ref="simpleRules">
            <b-form
              class="auth-forgot-password-form mt-2"
              @submit.prevent="validationForm"
            >
              <b-form-group
                label="E-Posta"
                label-for="forgot-password-email"
              >
                <validation-provider
                  #default="{ errors }"
                  :name="'E-Posta'"
                  rules="required|email"
                >
                  <b-form-input
                    id="forgot-password-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    placeholder="john@in4startups.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-button
                type="submit"
                variant="primary"
                block
              >
                Parolamı Sıfırla
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <b-link :to="{name:'auth-login-v2'}">
              <feather-icon icon="ChevronLeftIcon" /> Oturum Açın
            </b-link>
          </p>
        </b-col>
      </b-col>
      <!-- /Forgot password-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow, BCol, BLink, BCardTitle, BCardText, BImg, BForm, BFormGroup, BFormInput, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { $themeConfig } from '@themeConfig'
import store from '@/store/index'
import AppLogo from '@core/layouts/components/Logo.vue'

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BImg,
    BForm,
    BButton,
    BFormGroup,
    BFormInput,
    BCardTitle,
    BCardText,
    AppLogo,
    ValidationProvider,
    ValidationObserver,
  },
  setup() {
    // App Name
    const { appName, appLogoImage } = $themeConfig.app
    return {
      appName,
      appLogoImage,
    }
  },
  data() {
    return {
      userEmail: '',
      messageStatus: false,
      sideImg: require('@/assets/images/pages/forgot-password-v2.svg'),
      // validation
      required,
      email,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/forgot-password-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
    // eslint-disable-next-line vue/return-in-computed-property
    forgotResult() {
      const data = this.$store.getters['users/getForgotResult']
      if (data) {
        if (data.status && this.messageStatus === false) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: data.message,
              icon: 'EditIcon',
              variant: data.status,
            },
          })
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.messageStatus = true
        }
      }
      return data
    },
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.forgotPassword()
        }
      })
    },
    forgotPassword() {
      this.messageStatus = false
      this.$store.dispatch('users/forgotPassword', {
        email: this.userEmail,
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
.brand-logo svg{
  width: 160px !important;
}
</style>
