<template>
  <div>
    <b-button
      v-if="modalType==='line' ? userData.id==itemData.id_created_by && itemData.meeting_statuses.status==0 : userData.id==itemData.id_created_by && itemData.status.status==0"
      variant="primary"
      pill
      size="sm"
      @click="showModal"
    >
      <feather-icon icon="EditIcon" />

    </b-button>
    <b-modal
      v-model="status"
      title="Güncelle"
      centered
      no-close-on-backdrop
      no-close-on-esc
      no-enforce-focus
      size="md"
    >
      <template
        v-if="modalType==='line'"
      >
        <div>
          <b-form-group
            label="Görüşme Durumu"
            label-for="id_meeting_statuses"
          >
            <validation-provider
              #default="{errors}"
              name="Görüşme Durumu"
              rules="required"
            >

              <v-select
                id="id_meeting_statuses"
                v-model="itemData.id_meeting_statuses"
                :options="meetingStatuses"
                label="title"
                :reduce="type=>type.id"
                placeholder="Seçiniz"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </div>
        <div class="mt-1">
          <b-form-group
            label="Temas"
            label-for="id_meeting_contact_types"
          >
            <validation-provider
              #default="{errors}"
              name="Temas"
              rules="required"
            >
              <v-select
                id="id_meeting_contact_types"
                v-model="itemData.id_meeting_contact_types"
                :options="meetingContactTypes"
                label="title"
                :reduce="type=>type.id"
                placeholder="Seçiniz"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </div>

      </template>
      <template v-else-if="modalType==='item'">
        <div>
          <b-form-group
            label="Konu"
            label-for="id_meeting_subjects"
          >
            <validation-provider
              #default="{errors}"
              name="Konu"
              rules="required"
            >
              <v-select
                id="id_meeting_subjects"
                v-model="itemData.id_meeting_subjects"
                :options="meetingSubjects"
                label="title"
                :reduce="type=>type.id"
                placeholder="Seçiniz"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </div>
        <div class="mt-1">
          <b-form-group
            label="Görüşme Türü"
            label-for="id_meeting_types"
          >
            <validation-provider
              #default="{errors}"
              name="Görüşme Türü"
              rules="required"
            >

              <v-select
                id="id_meeting_types"
                v-model="itemData.id_meeting_types"
                :options="meetingTypes"
                label="title"
                :reduce="type=>type.id"
                placeholder="Seçiniz"
              />

              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </div>
      </template>
      <template
        #modal-footer
      >
        <b-button
          variant="secondary"
          :disabled="saving"
          @click="status=false"
        >
          <feather-icon icon="XIcon" />
          İptal
        </b-button>
        <b-button
          variant="success"
          :disabled="saving"
          @click="saveData"
        >
          <feather-icon
            v-if="!saving"
            icon="SaveIcon"
          />
          <b-spinner
            v-if="saving"
            small
          />
          Kaydet
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  BModal, BButton, BSpinner, BFormGroup,
} from 'bootstrap-vue'
import { ValidationProvider, localize } from 'vee-validate'
import vSelect from 'vue-select'
import { required } from '@validations'

export default {
  name: 'MeetingsEditModal',
  components: {
    BModal, BButton, BSpinner, BFormGroup, vSelect, ValidationProvider,
  },
  props: {
    modalType: {
      type: String,
      required: true,
    },
    itemData: {
      type: Object,
      required: true,
    },
    callback: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      status: false,
      saving: false,
      userData: JSON.parse(localStorage.getItem('userData')),
      required,
    }
  },
  computed: {
    meetingStatuses() {
      return this.$store.getters['meetingStatuses/dataList']
    },
    meetingContactTypes() {
      return this.$store.getters['meetingContactTypes/dataList']
    },
    meetingSubjects() {
      return this.$store.getters['meetingSubjects/dataList']
    },
    meetingTypes() {
      return this.$store.getters['meetingTypes/dataList']
    },
  },
  created() {
    this.getMeetingSubjects()
    this.getMeetingStatuses()
    this.getMeetingContactTypes()
    this.getMeetingTypes()
    localize('tr')
  },
  methods: {
    showModal() {
      this.status = true
      this.saving = false
    },
    saveData() {
      this.saving = true
      // Kayıt kodları buraya
      if (this.modalType === 'line') {
        this.$store.dispatch('meetingLines/saveData', this.itemData)
          .then(
            response => {
              if (response.status) {
                this.$store.dispatch('meetings/saveData', {
                  id: this.itemData.id_meetings,
                  id_meeting_statuses: this.id_meeting_statuses,

                })
                  .then(responseStatus => {
                    if (responseStatus.status) {
                      this.status = false
                      this.saving = false
                      this.callback()
                    }
                  })
              }
            },
          )
      } else if (this.modalType === 'item') {
        this.$store.dispatch('meetings/saveData', this.itemData)
          .then(
            response => {
              if (response.status) {
                this.status = false
                this.saving = false
                this.callback()
              }
            },
          )
      }
    },
    getMeetingStatuses() {
      this.$store.dispatch('meetingStatuses/getDataList', {
        select: {
          id: true,
          title: true,
          status: true,
        },
      })
    },
    getMeetingContactTypes() {
      this.$store.dispatch('meetingContactTypes/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
    getMeetingSubjects() {
      this.$store.dispatch('meetingSubjects/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
    getMeetingTypes() {
      this.$store.dispatch('meetingTypes/getDataList', {
        select: {
          id: true,
          title: true,
        },
      })
    },
  },
}
</script>
