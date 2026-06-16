<template>
  <b-card>
    <b-row>
      <b-col
        cols="12"
        md="3"
      >
        <user-name />
      </b-col>
      <b-col
        cols="12"
        md="3"
      >
        <user-last-name />
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
      />
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

        <user-password />
      </b-col>
    </b-row>

  </b-card>
</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import UserName from '@/views/Admin/Users/elements/UserName.vue'
import UserEmail from '@/views/Admin/Users/elements/UserEmail.vue'
import UserPassword from '@/views/Admin/Users/elements/UserPassword.vue'
import UserType from '@/views/Admin/Users/elements/UserType.vue'
import UserLastName from '@/views/Admin/Users/elements/UserLastName.vue'

export default {
  name: 'UserForm',
  components: {
    UserLastName,
    BCard,
    BRow,
    BCol,
    UserName,
    UserEmail,
    UserPassword,
    UserType,

  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
