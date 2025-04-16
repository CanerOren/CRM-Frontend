import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import moment from 'moment'
// import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')
require('@core/scss/vue/libs/vue-select.scss')
/* Custom Filters */
Vue.filter('toCurrency', value => {
  if (typeof Number(value) !== 'number') {
    return value
  }
  const formatter = new Intl.NumberFormat('tr-TR', {
    // style: "currency",
    // currency: "EUR",
    minimumFractionDigits: 2,
  })
  return formatter.format(value)
})
Vue.prototype.moment = moment
Vue.config.productionTip = false
moment.defineLocale('tr', {
  parentLocale: 'tr',
})
// const locale = localStorage.getItem('locale')
// if (locale) {i18n.locale = locale}
new Vue({
  // i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
