<template>
  <div class="text-center text-primary">
    <b-spinner />
    <div class="mt-1">
      Lütfen Bekleyiniz...
    </div>
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  name: 'PreLoading',
  components: {
    BSpinner,
  },
}
</script>

<style scoped>

</style>
