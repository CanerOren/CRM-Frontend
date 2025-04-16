<template>
  <b-form-group
    label="Sertifika"
    label-for="crypto"
  >
    <v-select
      id="crypto"
      v-model="dataItem.crypto"
      label="title"
      placeholder="Sertifika"
      :options="cryptos"
    />
  </b-form-group>
</template>

<script>
import {
  BFormGroup,
} from 'bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import { required } from '@validations'
import vSelect from 'vue-select'

export default {
  name: 'Crypto',
  components: {
    BFormGroup,
    vSelect,
  },
  data() {
    return {
      required,
      cryptos: [
        'SSL', 'TLS',
      ],
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['smtpConfig/dataItem']
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
