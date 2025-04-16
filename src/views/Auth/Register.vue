<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <b-link class="brand-logo">
        <app-logo />
      </b-link>
      <b-col
        lg="6"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Register V2"
          />
        </div>
      </b-col>
      <b-col
        lg="6"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title class="mb-0">
            {{ $t('login.Kayıt Ol') }} 🚀
          </b-card-title>
          <b-card-text class="mb-2">
            {{ $t('login.kayit-ol') }}
          </b-card-text>
          <b-card-text v-if="message">
            <b-alert
              :variant="error_status? 'danger' : 'success'"
              show
            >
              <div class="alert-body">
                {{ message }}
              </div>
            </b-alert>
          </b-card-text>
          <!-- form -->
          <validation-observer
            ref="registerForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-register-form mt-2"
              @submit.prevent="register"
            >
              <b-row>
                <b-col lg="6">
                  <b-form-group
                    :label="$t('login.Ad')"
                    label-for="name"
                  >
                    <validation-provider
                      #default="{ errors }"
                      :name="$t('login.Ad')"
                      vid="name"
                      rules="required"
                    >
                      <b-form-input
                        id="name"
                        v-model="name"
                        name="name"
                        :state="errors.length > 0 ? false:null"
                        :placeholder="$t('login.Ad')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    :label="$t('login.Soyad')"
                    label-for="surname"
                  >
                    <validation-provider
                      #default="{ errors }"
                      :name="$t('login.Soyad')"
                      vid="surname"
                      rules="required"
                    >
                      <b-form-input
                        id="surname"
                        v-model="surname"
                        :state="errors.length > 0 ? false:null"
                        :placeholder="$t('login.Soyad')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    :label="$t('login.E-Posta')"
                    label-for="email"
                  >
                    <validation-provider
                      #default="{ errors }"
                      :name="$t('login.E-Posta')"
                      vid="email"
                      rules="required|email"
                    >
                      <b-form-input
                        id="email"
                        v-model="userEmail"
                        name="email"
                        :state="errors.length > 0 ? false:null"
                        :placeholder="$t('login.E-Posta')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    :label="$t('login.Telefon')"
                    label-for="phone"
                  >
                    <validation-provider
                      #default="{ errors }"
                      :name="$t('login.Telefon')"
                      vid="phone"
                      rules="required"
                    >
                      <b-input-group>
                        <b-input-group-prepend is-text>
                          TR (+90)
                        </b-input-group-prepend>
                        <cleave
                          id="phone"
                          v-model="phone"
                          class="form-control"
                          :raw="true"
                          :options="options.phone"
                          :state="errors.length > 0 ? false:null"
                          :placeholder="$t('login.Telefon')"
                        />
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    :label="$t('login.Konum')"
                    label-for="id_cities"
                  >
                    <validation-provider
                      #default="{ errors }"
                      :name="$t('login.Konum')"
                      vid="id_cities"
                      rules="required"
                    >
                      <v-select
                        id="id_cities"
                        v-model="id_cities"
                        :options="cities"
                        label="title"
                        :reduce="city => city.id"
                        :state="errors.length > 0 ? false:null"
                        :placeholder="$t('login.Konum')"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    :label="$t('login.Parola')"
                    label-for="password"
                  >
                    <validation-provider
                      #default="{ errors }"
                      :name="$t('login.Parola')"
                      vid="password"
                      rules="required"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid':null"
                      >
                        <b-form-input
                          id="register-password"
                          v-model="password"
                          class="form-control-merge"
                          :type="passwordFieldType"
                          :state="errors.length > 0 ? false:null"
                          name="register-password"
                          placeholder="············"
                        />
                        <b-input-group-append is-text>
                          <feather-icon
                            :icon="passwordToggleIcon"
                            class="cursor-pointer"
                            @click="togglePasswordVisibility"
                          />
                        </b-input-group-append>
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group>
                <b-form-checkbox
                  id="user_agreement"
                  v-model="user_agreement"
                >
                  <div>
                    <b-link
                      v-b-modal.text-modal
                      @click="setModalData(userAgreementData)"
                    >
                      {{ $t('login.Kullanıcı Sözleşmesi') }}
                    </b-link>{{ $t('login.onayliyorum') }}
                  </div>
                </b-form-checkbox>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox
                  id="privacy_policy"
                  v-model="privacy_policy"
                >
                  <div>
                    <b-link
                      v-b-modal.text-modal
                      @click="setModalData(privacyPolicyData)"
                    >{{ $t('login.Gizlilik Politikası ve Kişisel Veriler Metni') }}</b-link>{{ $t('login.onayliyorum') }}
                  </div>
                </b-form-checkbox>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox
                  id="iys"
                  v-model="iys"
                >
                  <div class="font-small-2">
                    {{ $t('login.iys-text') }}
                  </div>
                </b-form-checkbox>
              </b-form-group>

              <b-button
                variant="primary"
                block
                type="submit"
                :disabled="invalid"
              >
                {{ $t('login.Hesap Oluştur') }}
              </b-button>
            </b-form>
          </validation-observer>
          <p class="text-center mt-2">
            <span>{{ $t('login.Zaten hesabınız var mı?') }}</span>
            <b-link :to="{name:'auth-login'}">
              <span>&nbsp;{{ $t('login.Oturum Açın') }}</span>
            </b-link>
          </p>
          <b-card-text class="text-center flex-centered">
            <b-row class="d-flex justify-content-center">
              <b-col
                v-for="(item,index) in locales"
                :key="index"
                cols="auto"
                class="text-center"
              >
                <b-button
                  variant="flat"
                  class="p-0 m-0"
                  @click="changeLocale(item.locale)"
                >
                  <b-img
                    :src="item.img"
                    height="14px"
                    width="22px"
                    :alt="item.locale"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-card-text>
        </b-col>
      </b-col>
      <!-- /Register-->
    </b-row>
    <b-modal
      id="text-modal"
      size="lg"
      :title="modalData.title"
      hide-footer
      centered
    >
      <b-card-text>
        <div v-html="modalData.content" />
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationObserver, ValidationProvider, localize } from 'vee-validate'
import AppLogo from '@core/layouts/components/Logo.vue'
import {
  BRow,
  BAlert,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BInputGroupPrepend,
  BImg,
  BCardTitle,
  BCardText,
  BModal,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import vSelect from 'vue-select'
import Cleave from 'vue-cleave-component'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.tr'

export default {
  components: {
    AppLogo,
    BRow,
    BAlert,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BModal,
    // validations
    ValidationProvider,
    ValidationObserver,
    vSelect,
    Cleave,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      options: {
        phone: {
          phone: true,
          phoneRegionCode: 'TR',
        },
      },
      locales: [
        {
          locale: 'tr',
          img: require('@/assets/images/flags/tr.png'),
          name: 'Türkçe',
        },
        {
          locale: 'en',
          img: require('@/assets/images/flags/en.png'),
          name: 'English',
        },
      ],
      modalData: {
        title: null,
        content: null,
      },
      name: null,
      surname: null,
      userEmail: null,
      phone: null,
      id_cities: null,
      password: null,
      user_agreement: null,
      privacy_policy: null,
      iys: null,
      message: null,
      error_status: null,
      sideImg: require('@/assets/images/pages/register-v2.svg'),
      // validation
      required,
      email,
    }
  },
  computed: {
    cities() {
      return this.$store.getters['cities/getCities']
    },
    userAgreementData() {
      return this.$store.getters['terms/getUserAgreement']
    },
    privacyPolicyData() {
      return this.$store.getters['terms/getPrivacyPolicy']
    },
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  created() {
    this.setLocalize()
    this.getCities()
    this.getTerms()
  },
  methods: {
    setLocalize() {
      const locale = localStorage.getItem('locale')
      if (locale) {
        localize(locale)
        this.$i18n.locale = locale
      } else {
        localize('tr')
      }
    },
    register() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          useJwt.register({
            name: this.name,
            surname: this.surname,
            email: this.userEmail,
            phone: this.phone,
            password: this.password,
            id_cities: this.id_cities,
            user_agreement: this.user_agreement,
            privacy_policy: this.privacy_policy,
            iys: this.iys,
          })
            .then(response => {
              if (response.data.status) {
                useJwt.setToken(response.data.data.accessToken)
                useJwt.setRefreshToken(response.data.data.refreshToken)
                localStorage.setItem('userData', JSON.stringify(response.data.data.userData))
                this.$ability.update(response.data.data.userData.ability)
                this.$router.push('/')
              } else {
                this.message = response.data.message
                this.error_status = response.data.error
              }
            })
            .catch(error => {
              this.$refs.registerForm.setErrors(error.response.data.error)
            })
        }
      })
    },
    changeLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
      localize(locale)
      this.getTerms()
    },
    getCities() {
      this.$store.dispatch('cities/citiesList')
    },
    getTerms() {
      this.$store.dispatch('terms/terms')
    },
    setModalData(data) {
      this.modalData = data
    },
  },
}
/* eslint-disable global-require */
</script>
<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
<style scoped>
.brand-logo svg{
  width: 160px !important;
}
</style>
