<template>
  <div
    class="w-100 d-block d-flex align-items-center height-100 bg-light justify-content-center"
  >
    <div class="text-center">
      <div class="p-1">
        <FeatherIcon icon="ImageIcon" size="24" class="text-muted" />
      </div>
      <div class="text-muted font-small-2">Görsel Bulunamadı</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageNotFound",
  props: {
    widthSize: {
      type: String,
      default: "w-100",
    },
    heightSize: {
      type: String,
      default: "height-100",
    },
  },
};
</script>
