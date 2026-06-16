import Vue from 'vue'
import Vuex from 'vuex'

/* Theme Core */
import carEvaluation from '@/store/Admin/Data/CarEvaluation/carEvaluation'
import cities from '@/store/Admin/Defines/Cities/cities'
import customerRequestImportances from '@/store/Admin/Defines/CustomerRequestImportances/customerRequestImportances'
import customerRequestSubjects from '@/store/Admin/Defines/CustomerRequestSubjects/customerRequestSubjects'
import customerRequestStatuses from '@/store/Admin/Defines/CustomerRequestStatuses/customerRequestStatuses'
import customerRequestTypes from '@/store/Admin/Defines/CustomerRequestTypes/customerRequestTypes'
import customerTypes from '@/store/Admin/Defines/CustomerTypes/customerTypes'
import districts from '@/store/Admin/Defines/Districts/districts'
import meetingContactTypes from '@/store/Admin/Defines/MeetingContactTypes/meetingContactTypes'
import meetingStatuses from '@/store/Admin/Defines/MeetingStatuses/meetingStatuses'
import meetingSubjects from '@/store/Admin/Defines/MeetingSubjects/meetingSubjects'
import meetingTypes from '@/store/Admin/Defines/MeetingTypes/meetingTypes'
import meetingLines from '@/store/Admin/Data/MeetingLines/meetingLines'
import customers from '@/store/Admin/Data/Customers/customers'
import meetings from '@/store/Admin/Data/Meetings/meetings'
import customerRequests from '@/store/Admin/Data/CustomerRequests/customerRequests'
import customerRequestLines from '@/store/Admin/Data/CustomerRequestLines/customerRequestLines'
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
    cities,
    customerRequestImportances,
    customerRequestSubjects,
    customerRequestTypes,
    customerTypes,
    districts,
    meetingContactTypes,
    meetingStatuses,
    meetingSubjects,
    meetingTypes,
    meetingLines,
    customers,
    meetings,
    customerRequests,
    customerRequestLines,
    customerRequestStatuses,
    carEvaluation,
  },
  strict: process.env.DEV,
})
