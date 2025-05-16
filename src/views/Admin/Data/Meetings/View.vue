<template>
  <validation-observer ref="simpleRules">
    <div>
      <template v-if="dataLoading">
        <loading class="mt-2" />
      </template>
      <template v-else>
        <b-tabs>
          <b-tab
            title="Görüşme Detayları"
            active
          >
            <b-card title="Görüşme Bilgileri">
              <b-table
                id="itemTable"
                responsive="sm"
                :fields="fieldsMeetings"
                :items="[dataItem]"
                striped
              >

                <template #cell(title)="data">
                  {{ data.item.title }}
                </template>
                <template #cell(created_at)="data">
                  <div v-if="data.item.created_at">
                    {{ moment(data.item.created_at).format('DD.MM.YYYY HH:mm:ss') }}
                  </div>
                </template>
                <template #cell(subject)="data">
                  <div v-if="data.item.subject">
                    {{ data.item.subject.title }}
                  </div>
                </template>
                <template #cell(meeting_type)="data">
                  <div v-if="data.item.meeting_type">
                    {{ data.item.meeting_type.title }}
                  </div>
                </template>
                <template #cell(contact_type)="data">
                  <div v-if="data.item.contact_type">
                    {{ data.item.contact_type.title }}
                  </div>
                </template>
                <template #cell(status)="data">
                  <div v-if="data.item.status">
                    <b-badge :variant="data.item.status.variant">
                      {{ data.item.status.title }}
                    </b-badge>
                  </div>
                </template>
                <template #cell(control)="item">
                  <meetings-edit-modal
                    :callback="getData"
                    :item-data="item.item"
                    :modal-type="'item'"
                  />
                </template>
              </b-table>
            </b-card>
            <b-card title="Görüşme  Notları">
              <b-table
                id="lineTable"
                responsive="sm"
                :fields="fieldsMeetingLines"
                :items="dataList"
                striped
              >
                <template #cell(title)="data">
                  {{ data.item.title }}
                </template>
                <template #cell(created_at)="data">
                  <div v-if="data.item.created_at">
                    {{ moment(data.item.created_at).format('DD.MM.YYYY HH:mm:ss') }}
                  </div>
                </template>
                <template #cell(meeting_contact_types)="data">
                  <div v-if="data.item.meeting_contact_types">
                    {{ data.item.meeting_contact_types.title }}
                  </div>
                </template>
                <template #cell(meeting_statuses)="data">
                  <div v-if="data.item.meeting_statuses">
                    <b-badge :variant="data.item.meeting_statuses.variant">
                      {{ data.item.meeting_statuses.title }}
                    </b-badge>
                  </div>
                </template>
                <template #cell(control)="data">

                  <meetings-edit-modal
                    :callback="getData"
                    :item-data="data.item"
                    :modal-type="'line'"
                  />
                </template>
              </b-table>
            </b-card>
            <b-card
              v-if="dataItem && dataItem.status.status===0 "
              title="Yeni Görüşme Oluştur"
            >
              <add-meeting-lines />
              <save-button
                :is-disabled="submitStatus"
                :save-action="submitForm"
              />
            </b-card>
          </b-tab>
          <b-tab title="Müşteri Kartı">
            <b-card title="Müşteri Kartı">
              <b-row>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItem.customer.name && dataItem.customer.last_name">
                      <div class="font-weight-bold text-primary">
                        Ad-Soyad
                      </div>
                      {{ dataItem.customer.name }} {{ dataItem.customer.last_name }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItem.customer.company">
                      <div class="font-weight-bold text-primary">
                        Şirket Adı
                      </div>
                      {{ dataItem.customer.company }}
                    </b-list-group-item>
                  </b-list-group>
                </b-col>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItem.customer.phone">
                      <div class="font-weight-bold text-primary">
                        Telefon Numarası
                      </div>
                      {{ dataItem.customer.phone }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItem.customer.email">
                      <div class="font-weight-bold text-primary">
                        E-mail
                      </div>
                      {{ dataItem.customer.email }}
                    </b-list-group-item>
                  </b-list-group>
                </b-col>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItem.customer.cities">
                      <div class="font-weight-bold text-primary">
                        Şehir
                      </div>
                      {{ dataItem.customer.cities.title }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItem.customer.districts">
                      <div class="font-weight-bold text-primary">
                        Semt
                      </div>
                      {{ dataItem.customer.districts.title }}
                    </b-list-group-item>
                  </b-list-group>

                </b-col>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItem.customer.date_of_birth">
                      <div class="font-weight-bold text-primary">
                        Doğum Tarihi
                      </div>
                      {{ moment(dataItem.customer.date_of_birth).format('DD.MM.YYYY') }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItem.customer.customer_type">
                      <div class="font-weight-bold text-primary">
                        Müşteri Tipi
                      </div>
                      {{ dataItem.customer.customer_type.title }}
                    </b-list-group-item>
                  </b-list-group>
                </b-col>
                <b-col
                  class="mt-2"
                  cols="12"
                  md="12"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItem.customer.address">
                      <div class="font-weight-bold text-primary">
                        Adres
                      </div>
                      {{ dataItem.customer.address }}
                    </b-list-group-item>

                  </b-list-group>

                </b-col>
              </b-row>
            </b-card>
            <b-button
              variant="danger"
              @click="goToEdit(dataItem.customer.id)"
            >
              Müşteri Kartı Güncelle
            </b-button>
          </b-tab>

        </b-tabs>

      </template>
    </div>
  </validation-observer>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BListGroupItem, BTab, BTabs, BListGroup, BCardBody, BTable, BBadge,
} from 'bootstrap-vue'
import { ValidationObserver, localize } from 'vee-validate'
import { required } from '@core/utils/validations/validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Loading from '@/layouts/components/loading.vue'
import AddMeetingLines from '@/views/Admin/Data/MeetingLines/components/AddMeetingLines.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'
import MeetingsEditModal from '@/views/Admin/Data/Meetings/MeetingsEditModal.vue'

export default {
  name: 'MeetingView',
  components: {
    MeetingsEditModal,
    SaveButton,
    Loading,
    BCard,
    BRow,
    BCol,
    BButton,
    BListGroupItem,
    BTab,
    BTabs,
    BListGroup,
    BCardBody,
    BTable,
    BBadge,
    AddMeetingLines,
    ValidationObserver,
  },
  data() {
    return {
      submitStatus: false,
      required,
      fieldsMeetings: [
        {
          key: 'created_at',
          label: 'Oluşturulma Tarihi',
        },
        {
          key: 'subject',
          label: 'Konu',
        },
        {
          key: 'meeting_type',
          label: 'Görüşme Türü',
        },
        {
          key: 'contact_type',
          label: 'Temas',
        },
        {
          key: 'status',
          label: 'Durum',
        },
        {
          key: 'control',
          label: '',
        },

      ],
      fieldsMeetingLines: [
        {
          key: 'created_at',
          label: 'Oluşturulma Tarihi',
        },
        {
          key: 'meeting_contact_types',
          label: 'Temas',
        },
        {
          key: 'title',
          label: 'Görüşme Notu',
          thStyle: { width: '50%' },
        },

        {
          key: 'meeting_statuses',
          label: 'Durumu',
        },
        {
          key: 'control',
          label: '',
        },
      ],
      dataQuery: {
        select: {
        },
      },
    }
  },
  computed: {
    dataItem() {
      return this.$store.getters['meetings/dataItem']
    },
    meetingLineSaveData() {
      return this.$store.getters['meetingLines/dataSaveStatus']
    },
    dataLoading() {
      return this.$store.getters['meetings/dataLoading']
    },
    dataList() {
      return this.$store.getters['meetingLines/dataList']
    },
    meetingLinesDataItem() {
      return this.$store.getters['meetingLines/dataItem']
    },
  },
  watch: {

    meetingLineSaveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
        this.submitStatus = false
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
        this.submitStatus = false
      }
      this.getData()
    },
  },

  created() {
    this.getData()
    localize('tr')
    this.$store.commit('meetingLines/RESET_DATA_ITEM', true)
  },
  methods: {
    getData() {
      this.$store.dispatch('meetings/getDataItem', this.$route.params.id)
        .then(response => {
          if (response) {
            this.$store.dispatch('meetingLines/getDataList', {
              select: {
                id: true,
                id_meetings: true,
                title: true,
                created_at: true,
                id_created_by: true,
                meeting_contact_types: {
                  select: {
                    title: true,
                  },
                },
                meeting_statuses: {
                  select: {
                    title: true,
                    variant: true,
                    status: true,
                  },
                },
                meeting_lines: {
                  select: {
                    subject: {
                      select: {
                        title: true,
                      },
                    },
                  },
                },
              },
              where: {
                id_meetings: response.id,
              },
            })
          }
        })
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.meetingLinesDataItem.id_meetings = this.dataItem.id
          this.meetingLinesDataItem.saveLines = true
          this.$store.dispatch('meetingLines/saveData', this.meetingLinesDataItem)
        } else {
          this.showToast({
            title: 'Uyarı!',
            icon: 'XIcon',
            text: 'Lütfen tüm alanları doldurun.',
            variant: 'danger',
          })
        }
      })
    },
    showToast(params) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: params.title,
          icon: params.icon,
          text: params.text,
          variant: params.variant,
        },
      }, {
        position: 'bottom-center',
      })
    },
    goToEdit(id) {
      this.$router.push(`/data/customers/edit/${id}`)
    },
  },
}
</script>
