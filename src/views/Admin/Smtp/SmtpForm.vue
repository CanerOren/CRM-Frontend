<template>
  <b-card>
    <b-row>
      <b-col
        cols="12"
        md="6"
      >
        <from-name />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <email-text />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <host-name />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <smtp-port />
      </b-col>
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
        <password />
      </b-col>
      <b-col cols="12">
        <crypto />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import FromName from '@/views/Admin/Smtp/elements/From.vue'
import EmailText from '@/views/Admin/Smtp/elements/Email.vue'
import HostName from '@/views/Admin/Smtp/elements/Host.vue'
import SmtpPort from '@/views/Admin/Smtp/elements/Port.vue'
import UserName from '@/views/Admin/Smtp/elements/User.vue'
import Password from '@/views/Admin/Smtp/elements/Password.vue'
import Crypto from '@/views/Admin/Smtp/elements/Crypto.vue'

export default {
  name: 'SmtpForm',
  components: {
    BCard,
    BRow,
    BCol,
    FromName,
    EmailText,
    HostName,
    SmtpPort,
    UserName,
    Password,
    Crypto,
  },
}
</script>
