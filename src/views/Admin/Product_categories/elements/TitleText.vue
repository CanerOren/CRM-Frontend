<template>
  <b-form-group
    label="Başlık"
    label-for="title"
  >
    <validation-provider
      #default="{ errors }"
      name="Başlık"
      rules="required"
    >
      <b-form-input
        id="title"
        v-model="itemData.title"
        placeholder="Başlık"
      />
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'TitleText',
  components: {
    BFormGroup,
    BFormInput,
    ValidationProvider,
  },
  computed: {
    itemData() {
      return this.$store.getters['productCategories/dataItem']
    },
  },
}
</script>
