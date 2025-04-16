<template>
  <b-form-group
    label="Parola"
    label-for="password"
  >
    <validation-provider
      #default="{ errors }"
      name="Parola"
      rules="required"
    >
      <b-input-group class="input-group-merge">
        <b-form-input
          id="password"
          v-model="dataItem.password"
          :type="passwordFieldType"
          placeholder="Parola"
        />
        <b-input-group-append is-text>
          <feather-icon
            :icon="passwordToggleIcon"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </b-input-group-append>
      </b-input-group>
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider, localize } from 'vee-validate'
import {
  BFormGroup, BFormInput, BInputGroupAppend,
  BInputGroup,
} from 'bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import { required } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  name: 'UserName',
  components: {
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    ValidationProvider,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      required,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    dataItem() {
      return this.$store.getters['users/dataItem']
    },
  },
  created() {
    localize('tr')
  },
}
</script>

<style scoped>

</style>
