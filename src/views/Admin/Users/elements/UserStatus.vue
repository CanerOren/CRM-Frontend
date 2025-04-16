<template>
  <b-form-group
    label="Hesap Durumu"
    label-for="status"
  >
    <validation-provider
      #default="{ errors }"
      name="Hesap Durumu"
      rules="required"
    >
      <v-select
        v-model="dataItem.status"
        :options="statuses"
        label="title"
        :reduce="status => status.id"
        placeholder="Seçiniz"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import {
  BFormGroup,
} from 'bootstrap-vue'
import { required } from '@validations'
import vSelect from 'vue-select'

export default {
  name: 'UserType',
  components: {
    BFormGroup,
    vSelect,
    ValidationProvider,
  },
  data() {
    return {
      required,
      statuses: [{
        id: '1',
        title: 'Aktif',
      }, {
        id: '0',
        title: 'Pasif',
      }],
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['users/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>
