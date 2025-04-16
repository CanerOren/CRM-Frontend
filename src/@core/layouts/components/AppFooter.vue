<template>
  <p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      © {{ new Date().getFullYear() }}
      <b-link
        class="ml-25"
        href="https://code64.com.tr/"
        target="_blank"
      >code64.com.tr</b-link>
      <span class="d-none d-sm-inline-block">, Tüm hakları Saklıdır.</span>
    </span>
    <span class="float-md-right d-none d-md-block text-primary">Code64 CMS</span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
