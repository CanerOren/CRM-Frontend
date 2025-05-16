<template>
  <b-form-group
    label="Şehir"
    label-for="id_cities"
  >
    <validation-provider
      #default="{ errors }"
      name="Şehir"
      rules="required"
    >
      <v-select
        id="id_cities"
        v-model="dataItem.id_cities"
        :options="cities"
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
  name: 'CustomerCity',
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
    cities() {
      return this.$store.getters['cities/dataList']
    },
  },
  created() {
    this.getCities()
    localize('tr')
  },
  methods: {
    getCities() {
      this.$store.dispatch('cities/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
