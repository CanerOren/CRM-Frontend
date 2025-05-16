<template>
  <b-form-group
    label="Bu Cevap Bir Çözüm"
  >
    <validation-provider
      #default="{ errors }"
      name="Çözüm Durumu"
      rules=""
    >
      <div>
        <b-form-checkbox
          v-model="dataItem.is_solution"
          :true-value="true"
          :false-value="false"
          name="is_solution"
          switch
        >
          <b>Çözüm</b>
        </b-form-checkbox>
        <small class="text-danger">{{ errors[0] }}</small>
      </div>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import { BFormGroup, BFormCheckbox } from 'bootstrap-vue'
import { required } from '@validations'

export default {
  name: 'SolutionCheckbox',
  components: {
    BFormGroup,
    BFormCheckbox,
    ValidationProvider,
  },
  data() {
    return {
      required,
    }
  },
  computed: {
    dataItem: {
      get() {
        const item = this.$store.getters['customerRequestLines/dataItem']
        item.is_answer = item.is_solution !== true
        return item
      },
      set(value) {
        this.$store.commit('customerRequestLines/setDataItem', value)
      },
    },
  },
  created() {
    localize('tr')
  },
}
</script>

<style scoped>
</style>
