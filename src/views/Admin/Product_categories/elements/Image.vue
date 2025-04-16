<template>
  <div>
    <b-card title="Görsel">
      <b-img
        v-if="dataItem.image"
        :src="imageUrl + '/media/product_categories/' + dataItem.image"
        thumbnail
        center
      />
      <div class="text-center mt-1">
        <b-button
          variant="primary"
          @click="setModal('product_categories')"
        >
          <FeatherIcon icon="UploadIcon" />
          Görsel Yükle
        </b-button>
      </div>
    </b-card>
    <cropper-image
      v-if="cropperSettings.type"
      :modal-status="cropperSettings.modalStatus"
      :close-modal="closeModal"
      :file-name="cropperSettings.fileName"
      :folder="cropperSettings.folder"
      :ratio="cropperSettings.ratio"
      :width-size="cropperSettings.widthSize"
      component="product_categories"
      :params="cropperSettings.type"
      :item-id="dataItem.id"
      @uploadImage="setUploadImage"
    />
  </div>
</template>
<script>
import { BCard, BImg, BButton } from 'bootstrap-vue'
import CropperImage from '@/layouts/components/common/CropperImage.vue'
import { required } from '@core/utils/validations/validations'

export default {
  name: 'ImageCard',
  components: {
    BCard,
    BImg,
    BButton,
    CropperImage,
  },
  data() {
    return {
      cropperSettings: {
        modalStatus: false,
        fileName: null,
        folder: null,
        ratio: null,
        widthSize: null,
        type: null,
      },
      required,
      imageUrl: this.$store.state.app.baseURL,
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['productCategories/dataItem']
    },
  },
  methods: {
    setModal(type) {
      if (type === 'product_categories') {
        this.cropperSettings = {
          modalStatus: true,
          fileName: 'product-category-image.jpg',
          folder: 'product_categories',
          ratio: 4 / 3,
          widthSize: 1200,
          type: 'product_categories',
        }
      }
    },
    closeModal() {
      this.cropperSettings = {
        modalStatus: false,
        fileName: null,
        folder: null,
        ratio: null,
        type: null,
      }
    },
    setUploadImage(item) {
      this.dataItem.image = item.filename
      this.dataItem.thumb = item.thumb
      this.dataItem.image_webp = item.filename_webp
      this.dataItem.thumb_webp = item.thumb_webp
      this.dataItem.mediaData = item
      this.cropperSettings.modalStatus = false
    },
  },
}
</script>
