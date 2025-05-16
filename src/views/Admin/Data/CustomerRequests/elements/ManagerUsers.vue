<template>
  <b-form-group
    label="Yetkili"
    label-for="id_manager_user"
  >
    <validation-provider
      #default="{ errors }"
      name="Yetkili"
      rules="required"
    >
      <v-select
        id="id_manager_user"
        v-model="dataItem.id_manager_user"
        :options="managerUser"
        :reduce="type => type.id"
        :get-option-label="()=> ''"
        placeholder="Seçiniz"
      >
        <template #option="{name, lastname}">
          {{ name }} {{ lastname }}
        </template>
        <template #selected-option="{name, lastname}">
          {{ name }} {{ lastname }}
        </template>
      </v-select>
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
  name: 'ManagerUser',
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
      return this.$store.getters['customerRequests/dataItem']
    },
    managerUser() {
      return this.$store.getters['users/dataList']
    },
  },
  created() {
    this.getManagerUser()
    localize('tr')
  },
  methods: {
    getManagerUser() {
      this.$store.dispatch('users/getDataList', {
        select: {
          id: true,
          name: true,
          lastname: true,
        },
      })
    },
  },
}
</script>
