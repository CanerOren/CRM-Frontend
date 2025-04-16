import Vue from 'vue'
import Vuex from 'vuex'

/* Theme Core */
import verticalMenu from './vertical-menu'
import appConfig from './app-config'
import app from './app'
/* App Core */
import users from './Admin/Core/users'
import userTypes from './Admin/Core/user_types'
import smtpConfig from './Admin/Core/smtpconfig'
import abilities from './Admin/Core/abilities'
import cropperUploads from './Admin/Core/cropper_uploads'
import fileUpload from './Admin/Core/file_upload'
/* App Data */
import productCategories from './Admin/App/product_categories'


/* App Defines */


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    users,
    userTypes,
    smtpConfig,
    abilities,
    cropperUploads,
    fileUpload,
    productCategories,
  },
  strict: process.env.DEV,
})
