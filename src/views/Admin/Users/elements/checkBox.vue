<template>
  <div>
    <b-form-checkbox
      v-model="checked"
      name="check-button"
      switch
    >
      Parolayı Güncelle
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  name: 'PasswordCheckbox',
  components: {
    BFormCheckbox,
  },
  data() {
    return {
      checked: 'Güncelleme',

    }
  },
}
</script>
