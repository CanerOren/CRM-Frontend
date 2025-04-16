<template>
  <b-modal
    v-model="modalStatus"
    centered
    title="Dosya Yükleme"
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
      >
        <b-form-file
          id="file-upload"
          v-model="upload_file"
          placeholder="Bir dosya seçin veya buraya bırakın..."
          drop-placeholder="Dosyayı buraya bırakın..."
          browse-text="Dosya Seçin"
        />
        <div class="text-center mt-1">
          <b-button
            variant="success"
            :disabled="!upload_file"
            @click="uploadFile"
          >
            <FeatherIcon icon="UploadIcon" />
            Dosya Yükle
          </b-button>
        </div>
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
import PreLoading from '@/layouts/components/common/PreLoading.vue'

export default {
  name: 'DocsUpload',
  components: {
    PreLoading,
    BModal,
    BRow,
    BCol,
    BFormFile,
    BButton,
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
      upload_file: null,
    }
  },
  computed: {
    uploading() {
      return this.$store.getters['fileUpload/uploading']
    },
  },
  methods: {
    uploadFile() {
      this.$store.dispatch('fileUpload/uploadFile', {
        folder: this.folder,
        ordering: this.ordering,
        component: this.component,
        params: this.params,
        item_id: this.itemId,
        upload_file: this.upload_file,
      })
        .then(response => {
          if (response.status) {
            this.$emit('uploadFile', response.data)
          }
        })
    },
  },
}

</script>
