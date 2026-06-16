import Vue from 'vue'
import VueRouter from 'vue-router'

import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
/* CORE */
import carEvaluation from '@/router/routes/Admin/Data/CarEvaluation/CarEvaluation'
import customerRequestStatuses from '@/router/routes/Admin/Defines/CustomerRequestStatuses/customerRequestStatuses'
import cities from '@/router/routes/Admin/Defines/Cities/Cities'
import customerRequestImportances from '@/router/routes/Admin/Defines/CustomerRequestImportances/CustomerRequestImportances'
import customerRequestSubjects from '@/router/routes/Admin/Defines/CustomerRequestSubjects/CustomerRequestSubjects'
import customerRequestTypes from '@/router/routes/Admin/Defines/CustomerRequestTypes/CustomerRequestTypes'
import customerTypes from '@/router/routes/Admin/Defines/CustomerTypes/CustomerTypes'
import districts from '@/router/routes/Admin/Defines/Districts/Districts'
import meetingContactTypes from '@/router/routes/Admin/Defines/MeetingContactTypes/MeetingContactTypes'
import meetingStatuses from '@/router/routes/Admin/Defines/MeetingStatuses/MeetingSatuses'
import meetingSubjects from '@/router/routes/Admin/Defines/MeetingSubjects/MeetingSubjects'
import meetingTypes from '@/router/routes/Admin/Defines/MeetingTypes/MeetingTypes'
import meetingLines from '@/router/routes/Admin/Data/MeetingLines/MeetingLines'
import customers from '@/router/routes/Admin/Data/Customers/Customers'
import meetings from '@/router/routes/Admin/Data/Meetings/Meetings'
import customerRequests from './routes/Admin/Data/CustomerRequests/CustomerRequests'
import adminTechSupport from './routes/Admin/Data/TechSupportAdmin/TechSupportAdmin'
import userTechSupport from './routes/Admin/Data/TechSupportUser/TechSupportUser'
import app from './routes/app'
/* ADMIN:CORE */
import users from './routes/Admin/Core/Users'
import userTypes from './routes/Admin/Core/User_types'
import smtpConfig from './routes/Admin/Core/Configs'

/* ADMIN:APP */
import configs from './routes/Admin/App/Configs'
import productCategories from './routes/Admin/App/Product_categories'

/* ADMIN:FIELDS */

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'home' } },
    ...app,
    ...configs,
    ...users,
    ...userTypes,
    ...productCategories,
    ...smtpConfig,
    ...cities,
    ...customerRequestImportances,
    ...customerRequestSubjects,
    ...customerRequestTypes,
    ...customerTypes,
    ...districts,
    ...meetingContactTypes,
    ...meetingStatuses,
    ...meetingSubjects,
    ...meetingTypes,
    ...meetingLines,
    ...customers,
    ...meetings,
    ...customerRequests,
    ...customerRequestStatuses,
    ...adminTechSupport,
    ...userTechSupport,
    ...carEvaluation,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })

    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
