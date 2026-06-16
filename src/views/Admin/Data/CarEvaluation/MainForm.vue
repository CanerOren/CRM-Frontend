<template>
  <validation-observer ref="indicataFormObserver">
    <div>
      <identification-form />
      <condition-form />
      <accessories-form />
    </div>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import IdentificationForm from '@/views/Admin/Data/CarEvaluation/IdentificationForm.vue'
import ConditionForm from '@/views/Admin/Data/CarEvaluation/ConditionForm.vue'
import AccessoriesForm from '@/views/Admin/Data/CarEvaluation/AccessoriesForm.vue'

export default {
  name: 'IndicataMainForm',
  components: {
    ValidationObserver,
    IdentificationForm,
    ConditionForm,
    AccessoriesForm,
  },
}
</script>
