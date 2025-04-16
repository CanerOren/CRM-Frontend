<template>
  <b-card>
    <b-row>
      <b-col
        cols="12"
        md="6"
      >
        <user-name />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <user-email />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <user-type />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <user-status />
      </b-col>
    </b-row>
    <user-password />
  </b-card>
</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import UserName from '@/views/Admin/Users/elements/UserName.vue'
import UserEmail from '@/views/Admin/Users/elements/UserEmail.vue'
import UserPassword from '@/views/Admin/Users/elements/UserPassword.vue'
import UserType from '@/views/Admin/Users/elements/UserType.vue'
import UserStatus from '@/views/Admin/Users/elements/UserStatus.vue'

export default {
  name: 'UserForm',
  components: {
    BCard,
    BRow,
    BCol,
    UserName,
    UserEmail,
    UserPassword,
    UserType,
    UserStatus,
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
