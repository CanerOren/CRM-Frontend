<template>
  <b-modal
    v-model="modalStatus"
    centered
    title="Fotoğraf Kırpma"
    ok-only
    size="lg"
    hide-footer
    no-close-on-esc
    no-close-on-backdrop
    hide-header-close
  >
    <b-row>
      <b-col
        v-if="uploading"
        cols="12"
      >
        <pre-loading />
      </b-col>
      <b-col
        v-else
        cols="12"
        md="8"
        offset="2"
      >
        <div
          class="bg-light p-2 rounded mb-2"
        >
          <div
            v-if="!image.src"
            class="border-top border-left border-right border-bottom rounded text-center p-5 text-gray"
          >
            <div>
              <FeatherIcon
                icon="CameraIcon"
                size="18"
              />
            </div>
            <div class="font-weight-light mt-2">
              Bir fotoğraf seçin
            </div>
          </div>
          <div v-else>
            <cropper
              ref="cropper"
              class="cropper rounded"
              :src="image.src"
              :stencil-props="{
                aspectRatio: ratio
              }"
            />
            <div class="text-center mt-2">
              <b-button
                variant="primary"
                @click="uploadImage"
              >
                <FeatherIcon icon="CropIcon" />
                Fotoğrafı Kaydet
              </b-button>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12">
        <b-form-file
          id="image-upload"
          placeholder="Bir görsel seçin veya buraya bırakın..."
          drop-placeholder="Görseli buraya bırakın..."
          browse-text="Görsel Seçin"
          @change="loadImage($event)"
        />
      </b-col>
      <b-col
        cols="12"
        class="mt-1 text-center"
      >
        <b-button
          variant="flat-danger"
          size="sm"
          @click="closeModal"
        >
          İptal Kapat
        </b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import {
  BModal,
  BRow,
  BCol,
  BFormFile,
  BButton,
} from 'bootstrap-vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import PreLoading from '@/layouts/components/common/PreLoading.vue'

function getMimeType(file, fallback = null) {
  const byteArray = (new Uint8Array(file)).subarray(0, 4)
  let header = ''
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16)
  }
  switch (header) {
    case '89504e47':
      return 'image/png'
    case '47494638':
      return 'image/gif'
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
    case 'ffd8ffe3':
    case 'ffd8ffe8':
      return 'image/jpeg'
    default:
      return fallback
  }
}
export default {
  name: 'CropperImage',
  components: {
    BModal,
    BRow,
    BCol,
    BFormFile,
    Cropper,
    BButton,
    PreLoading,
  },
  props: {
    modalStatus: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    ratio: {
      type: Number,
      required: true,
    },
    resize: {
      type: Boolean,
      default: true,
    },
    widthSize: {
      type: Number,
      default: 1200,
    },
    thumb: {
      type: Boolean,
      default: true,
    },
    webp: {
      type: Boolean,
      default: true,
    },
    ordering: {
      type: Number,
      default: 0,
    },
    component: {
      type: String,
      default: '',
    },
    params: {
      type: String,
      default: null,
    },
    itemId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      image: {
        src: null,
        type: null,
      },
    }
  },
  computed: {
    uploading() {
      return this.$store.getters['cropperUploads/uploading']
    },
  },
  destroyed() {
    if (this.image.src) {
      URL.revokeObjectURL(this.image.src)
    }
  },
  methods: {
    reset() {
      this.image = {
        src: null,
        type: null,
      }
    },
    uploadImage() {
      const { canvas } = this.$refs.cropper.getResult()
      if (canvas) {
        canvas.toBlob(blob => {
          this.$store.dispatch('cropperUploads/uploadImage', {
            folder: this.folder,
            resize: this.resize,
            width: this.widthSize,
            thumb: this.thumb,
            webp: this.webp,
            ordering: this.ordering,
            component: this.component,
            params: this.params,
            item_id: this.itemId,
            filename: this.fileName,
            upload_image: blob,
          })
            .then(response => {
              if (response.status) {
                this.reset()
                this.$emit('uploadImage', response.data)
              }
            })
        }, 'image/jpeg')
      }
    },
    loadImage(event) {
      const { files } = event.target
      if (files && files[0]) {
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src)
        }
        const blob = URL.createObjectURL(files[0])
        const reader = new FileReader()
        reader.onload = e => {
          this.image = {
            src: blob,
            type: getMimeType(e.target.result, files[0].type),
          }
        }
        reader.readAsArrayBuffer(files[0])
      }
    },
  },
}

</script>
