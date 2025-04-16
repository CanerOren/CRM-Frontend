<template>
  <b-card title="Merhaba">
    <b-row>
      <b-col cols="12">
        Code64 içerik yönetim sistemine hoşgeldiniz.
        <div class="text-muted font-small-2">
          Code64 CMS
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import {
  BCard,
  BCol,
  BRow,
} from 'bootstrap-vue'

export default {
  name: 'Manager',
  components: {
    BCard,
    BRow,
    BCol,
  },
}
</script>
