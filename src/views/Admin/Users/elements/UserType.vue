<template>
  <b-form-group
    label="Kullanıcı Tipi"
    label-for="id_user_types"
  >
    <validation-provider
      #default="{ errors }"
      name="Kullanıcı Tipi"
      rules="required"
    >
      <v-select
        v-model="dataItem.id_user_types"
        :options="userTypes"
        label="title"
        :reduce="type => type.id"
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
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['users/dataItem']
    },
    userTypes() {
      return this.$store.getters['userTypes/dataList']
    },
  },
  created() {
    this.getUserTypes()
    localize('tr')
  },
  methods: {
    getUserTypes() {
      this.$store.dispatch('userTypes/getDataList', {
        select: [
          'user_types.id AS id',
          'user_types.title AS title',
        ],
      })
    },
  },
}
</script>
