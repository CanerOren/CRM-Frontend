<template>
  <div>
    <div class="d-flex justify-content-center mb-1">
      <div class="text-center">
        <b-spinner />
        <p class="mt-1 font-weight-light">
          Yükleniyor...
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  name: 'Loading',
  components: { BSpinner },
}
</script>
