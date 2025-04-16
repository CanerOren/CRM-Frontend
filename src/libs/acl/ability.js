import { Ability } from '@casl/ability'
import { initialAbility } from './config'

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user
// ? You can update this if you store user abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
let userData = localStorage.getItem('userData')
if (userData === 'undefined') {
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  userData = null
} else {
  try {
    userData = JSON.parse(userData)
  } catch (e) {
    localStorage.removeItem('userData')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    userData = null
  }
}
const existingAbility = userData ? userData.ability : null

export default new Ability(existingAbility || initialAbility)
