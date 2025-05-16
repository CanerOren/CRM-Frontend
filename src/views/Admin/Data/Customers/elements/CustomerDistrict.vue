<template>
  <b-form-group
    label="Semt"
    label-for="id_districts"
  >
    <validation-provider
      #default="{ errors }"
      name="Semt"
      rules="required"
    >
      <v-select
        id="id_districts"
        v-model="dataItem.id_districts"
        :options="districts"
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
  name: 'CustomerDistricts',
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
      return this.$store.getters['customers/dataItem']
    },
    districts() {
      return this.$store.getters['districts/dataList']
    },
  },
  created() {
    this.getDistricts()
    localize('tr')
  },
  methods: {
    getDistricts() {
      this.$store.dispatch('districts/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
