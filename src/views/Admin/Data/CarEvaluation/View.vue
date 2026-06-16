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
            <b-row>
              <b-col
                cols="12"
                md="4"
              >
                <b-card title="Müşteri">
                  <b-row>
                    <b-col cols="12">
                      <b-list-group>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Ad-Soyad
                          </div>
                          {{ dataItemCustomerRequests.customer.name }} {{ dataItemCustomerRequests.customer.last_name }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Şirket Adı
                          </div>
                          {{ dataItemCustomerRequests.customer.company }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Telefon Numarası
                          </div>
                          {{ dataItemCustomerRequests.customer.phone }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Adres
                          </div>
                          {{ dataItemCustomerRequests.customer.address }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Mail Adresi
                          </div>
                          {{ dataItemCustomerRequests.customer.email }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col
                cols="12"
                md="8"
              >
                <b-card title="Görüşme Bilgileri">
                  <b-row>
                    <b-col
                      cols="12"
                      md="6"
                    >
                      <b-list-group>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Müşteri Talep/İstek Tipi
                          </div>
                          {{ dataItemCustomerRequests.request_type.title }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Önem
                          </div>
                          {{ dataItemCustomerRequests.request_importance.title }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Oluşturan
                          </div>
                          {{ dataItemCustomerRequests.created_by.name }} {{ dataItemCustomerRequests.created_by.lastname }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                    <b-col
                      cols="12"
                      md="6"
                    >
                      <b-list-group>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Müşteri Talep/İstek Konusu
                          </div>
                          {{ dataItemCustomerRequests.request_subject.title }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Yetkilisi
                          </div>
                          <div v-if="dataItemCustomerRequests.manager_user">
                            {{ dataItemCustomerRequests.manager_user.name }} {{ dataItemCustomerRequests.manager_user.lastname }}
                          </div>
                        </b-list-group-item>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Oluşturulma Tarihi
                          </div>
                          {{ moment(dataItemCustomerRequests.created_at).format('DD.MM.YYYY HH:mm:ss') }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                    <b-col cols="12">
                      <b-list-group>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Not
                          </div>
                          {{ dataItemCustomerRequests.notes }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                    <b-col cols="12">
                      <b-list-group>
                        <b-list-group-item>
                          <div class="font-weight-bold text-primary">
                            Durum
                          </div>
                          <div v-if="dataItemCustomerRequests.customer_request_statuses">
                            {{ dataItemCustomerRequests.customer_request_statuses.title }}
                          </div>
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-card title="Cevaplar">
              <b-table
                responsive="sm"
                :fields="fields"
                :items="dataListCustomerRequestLines"
                striped
              >
                <template #cell(title)="data">
                  {{ data.item.title }}
                  <div v-if="data.item.approved_at!=null">
                    <small class="text-success">
                      Çözüm Mesajı
                    </small>
                  </div>
                  <div v-if="data.item.denied_at!=null">
                    <small class="text-danger">
                      Reddedilen Çözüm Mesajı
                    </small>
                  </div>
                </template>
                <template #cell(created_at)="data">
                  <div v-if="data.item.created_at">
                    {{ moment(data.item.created_at).format("DD-MM-YYYY HH:mm:ss") }}
                  </div>
                </template>
                <template #cell(is_solution)="data">
                  <div v-if="data.item.is_solution==1">
                    Çözüm
                  </div>
                  <div v-else-if="data.item.is_solution==0">
                    Yanıt
                  </div>
                </template>
                <template #cell(approved_at)="data">
                  <div v-if="data.item.approved_at">
                    {{ moment(data.item.approved_at).format("DD-MM-YYYY HH:mm:ss") }}
                  </div>
                </template>
                <template #cell(denied_at)="data">
                  <div v-if="data.item.denied_at">
                    {{ moment(data.item.denied_at).format("DD-MM-YYYY HH:mm:ss") }}
                  </div>
                </template>
                <template #cell(approve)="data">
                  <div v-if="data.item.is_solution && data.item.approved_at==null && data.item.denied_at==null && userData.id===dataItemCustomerRequests.id_manager_user">
                    <b-button
                      size="sm"
                      variant="success"
                      @click="approveLine(data.item)"
                    >
                      Onayla
                    </b-button>
                    <b-button
                      class="ml-2"
                      size="sm"
                      variant="danger"
                      @click="denyLine(data.item)"
                    >
                      Reddet
                    </b-button>
                  </div>
                </template>
              </b-table>
            </b-card>
            <b-row>
              <b-col
                cols="12"
              >
                <b-card v-if="dataItemCustomerRequests.customer_request_statuses.status===0">
                  <line-form />
                  <save-button
                    :is-disabled="submitStatus"
                    :save-action="submitForm"
                  />
                </b-card>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Müşteri Kartı">
            <b-card title="Müşteri Kartı">
              <b-row>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.name && dataItemCustomerRequests.customer.last_name">
                      <div class="font-weight-bold text-primary">
                        Ad-Soyad
                      </div>
                      {{ dataItemCustomerRequests.customer.name }} {{ dataItemCustomerRequests.customer.last_name }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.company">
                      <div class="font-weight-bold text-primary">
                        Şirket Adı
                      </div>
                      {{ dataItemCustomerRequests.customer.company }}
                    </b-list-group-item>
                  </b-list-group>

                </b-col>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.phone">
                      <div class="font-weight-bold text-primary">
                        Telefon Numarası
                      </div>
                      {{ dataItemCustomerRequests.customer.phone }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.email">
                      <div class="font-weight-bold text-primary">
                        E-mail
                      </div>
                      {{ dataItemCustomerRequests.customer.email }}
                    </b-list-group-item>
                  </b-list-group>

                </b-col>
                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.cities">
                      <div class="font-weight-bold text-primary">
                        Şehir
                      </div>
                      {{ dataItemCustomerRequests.customer.cities.title }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.districts">
                      <div class="font-weight-bold text-primary">
                        Semt
                      </div>
                      {{ dataItemCustomerRequests.customer.districts.title }}
                    </b-list-group-item>
                  </b-list-group>

                </b-col>

                <b-col
                  cols="12"
                  md="3"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.date_of_birth">
                      <div class="font-weight-bold text-primary">
                        Doğum Tarihi
                      </div>
                      {{ moment(dataItemCustomerRequests.customer.date_of_birth).format('DD.MM.YYYY') }}
                    </b-list-group-item>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.customer_type">
                      <div class="font-weight-bold text-primary">
                        Müşteri Tipi
                      </div>
                      {{ dataItemCustomerRequests.customer.customer_type.title }}
                    </b-list-group-item>
                  </b-list-group>

                </b-col>
                <b-col
                  class="mt-2"
                  cols="12"
                  md="12"
                >
                  <b-list-group>
                    <b-list-group-item v-if="dataItemCustomerRequests.customer.address">
                      <div class="font-weight-bold text-primary">
                        Adres
                      </div>
                      {{ dataItemCustomerRequests.customer.address }}
                    </b-list-group-item>

                  </b-list-group>

                </b-col>
              </b-row>
              <b-card-footer class="mt-3">
                <b-row>
                  <b-col
                    v-if="dataItemCustomerRequests.created_by"
                    md="auto"
                  >

                    <span class="font-weight-bold">
                      <feather-icon icon="UserIcon" />
                      {{ dataItemCustomerRequests.created_by.name }} {{ dataItemCustomerRequests.created_by.lastname }}
                    </span>
                    <div>
                      <small>
                        {{ moment(dataItemCustomerRequests.created_at).format('DD.MM.YYYY HH:mm:ss') }}
                      </small>
                    </div>
                  </b-col>
                  <b-col
                    v-if="dataItemCustomerRequests.updated_by"
                    md="auto"
                  >

                    <span class="font-weight-bold text-warning">
                      <feather-icon icon="EditIcon" />
                      {{ dataItemCustomerRequests.updated_by.name }} {{ dataItemCustomerRequests.updated_by.lastname }}
                    </span>
                    <div>
                      <small>
                        {{ moment(dataItemCustomerRequests.updated_at).format('DD.MM.YYYY HH:mm:ss') }}
                      </small>
                    </div>
                  </b-col>
                </b-row>
              </b-card-footer>
            </b-card>
            <b-button
              variant="danger"
              @click="goToEdit(dataItemCustomerRequests.customer.id)"
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
  BCard, BRow, BCol, BButton, BListGroupItem, BTab, BTabs, BListGroup, BCardBody, BTable, BBadge, BCardFooter,
} from 'bootstrap-vue'
import { ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Loading from '@/layouts/components/loading.vue'
import LineForm from '@/views/Admin/Data/CustomerRequests/LineForm.vue'
import SaveButton from '@/layouts/components/common/SaveButton.vue'
import moment from 'moment'

export default {
  name: 'Edit',
  components: {
    BCardFooter,
    BCard,
    BRow,
    BCol,
    BButton,
    BListGroupItem,
    BTab,
    BTabs,
    BListGroup,
    BTable,
    ValidationObserver,
    Loading,
    LineForm,
    SaveButton,
  },
  data() {
    return {
      submitStatus: false,
      required,
      userData: JSON.parse(localStorage.getItem('userData')),
      fields: [
        {
          key: 'title',
          label: 'Cevap',
          thStyle: { width: '50%' },
        },
        {
          key: 'created_at',
          label: 'Oluşturulduğu Tarih',
        },
        {
          key: 'approved_at',
          label: 'Onaylandığı Tarih',
        },
        {
          key: 'denied_at',
          label: 'Reddedildiği Tarih',
        },
        {
          key: 'is_solution',
          label: 'Türü',
        },
        {
          key: 'approve',
          label: '',
          thClass: 'width-300 text-nowrap',
          tdClass: 'width-300 text-nowrap',
        },
        {
          key: 'deny',
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
    dataItemCustomerRequests() {
      return this.$store.getters['customerRequests/dataItem']
    },
    saveData() {
      return this.$store.getters['customerRequestLines/dataSaveStatus']
    },
    dataLoading() {
      return this.$store.getters['customerRequests/dataLoading']
    },
    dataItemCustomerRequestLines() {
      return this.$store.getters['customerRequestLines/dataItem']
    },
    dataListCustomerRequestLines() {
      return this.$store.getters['customerRequestLines/dataList']
    },
  },
  watch: {
    saveData(val) {
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
      this.getDataCustomerRequests()
    },
  },
  created() {
    this.getDataCustomerRequests()
    localize('tr')
    this.$store.commit('customerRequestLines/RESET_DATA_ITEM', true)
  },
  updated() {
    this.$store.commit('customerRequestLines/RESET_DATA_ITEM', true)
  },
  methods: {
    getDataCustomerRequests() {
      this.$store.dispatch('customerRequests/getDataItem', this.$route.params.id)
        .then(response => {
          if (response) {
            this.$store.dispatch('customerRequestLines/getDataList', {
              select: {
                id: true,
                title: true,
                id_customer_requests: true,
                customer_request_lines: {
                  select: {
                    id: true,
                    id_customer_request_statuses: true,
                  },
                },
                is_answer: true,
                is_solution: true,
                approved_at: true,
                denied_at: true,
                id_created_by: true,
                id_updated_by: true,
                created_at: true,
                updated_at: true,
                created_by: {
                  select: {
                    id: true,
                    name: true,
                    lastname: true,
                  },
                },
                updated_by: {
                  select: {
                    id: true,
                    name: true,
                    lastname: true,
                  },
                },
                customer_request_statuses: {
                  select: {
                    title: true,
                  },
                },
              },
              where: {
                id_customer_requests: response.id,
              },
            })
          }
        })
    },
    submitForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.submitStatus = true
          this.dataItemCustomerRequestLines.id_customer_requests = this.dataItemCustomerRequests.id
          this.dataItemCustomerRequestLines.saveLines = true
          this.$store.dispatch('customerRequestLines/saveData', this.dataItemCustomerRequestLines)
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
    approveLine(item) {
      const selectedItem = item
      selectedItem.approved_at = moment().toISOString()
      selectedItem.approved = true
      this.$store.dispatch('customerRequestLines/saveData',
        selectedItem).then(() => {
        this.showToast({
          variant: 'success',
          title: 'Başarılı',
          text: 'Talep onaylandı!',
          icon: 'CheckIcon',
        })
        this.getDataCustomerRequests()
      }).catch(() => {
        this.showToast({
          variant: 'danger',
          title: 'Hata',
          text: 'Talep onaylanamadı!',
          icon: 'XIcon',
        })
      })
    },
    denyLine(item) {
      const selectedItem = item
      selectedItem.denied_at = moment().toISOString()
      selectedItem.denied = true
      this.$store.dispatch('customerRequestLines/saveData',
        selectedItem).then(() => {
        this.showToast({
          variant: 'success',
          title: 'Başarılı',
          text: 'Talep onaylandı!',
          icon: 'CheckIcon',
        })
        this.getDataCustomerRequests()
      }).catch(() => {
        this.showToast({
          variant: 'danger',
          title: 'Hata',
          text: 'Talep onaylanamadı!',
          icon: 'XIcon',
        })
      })
    },
  },
}
</script>
