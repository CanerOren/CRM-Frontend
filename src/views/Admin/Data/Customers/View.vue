<template>
  <div>
    <template v-if="dataLoading">
      <loading class="mt-2" />
    </template>
    <template v-else>
      <b-card title="Müşteri Kartı">
        <div class="text-right mb-1">
          <b-button
            class="mr-2"
            variant="danger"
            :href="downloadURL"
            target="_blank"
          >
            <FeatherIcon icon="BookOpenIcon" /> PDF'e Dönüştür
          </b-button>
        </div>
        <b-row>
          <b-col
            cols="12"
            md="3"
          >
            <b-list-group>
              <b-list-group-item v-if="dataItem.name && dataItem.last_name">
                <div class="font-weight-bold text-primary">
                  Ad-Soyad
                </div>
                {{ dataItem.name }} {{ dataItem.last_name }}
              </b-list-group-item>
              <b-list-group-item v-if="dataItem.company">
                <div class="font-weight-bold text-primary">
                  Şirket Adı
                </div>
                {{ dataItem.company }}
              </b-list-group-item>
            </b-list-group>

          </b-col>
          <b-col
            cols="12"
            md="3"
          >
            <b-list-group>
              <b-list-group-item v-if="dataItem.phone">
                <div class="font-weight-bold text-primary">
                  Telefon Numarası
                </div>
                {{ dataItem.phone }}
              </b-list-group-item>
              <b-list-group-item v-if="dataItem.email">
                <div class="font-weight-bold text-primary">
                  E-mail
                </div>
                {{ dataItem.email }}
              </b-list-group-item>
            </b-list-group>

          </b-col>
          <b-col
            cols="12"
            md="3"
          >
            <b-list-group>
              <b-list-group-item v-if="dataItem.cities">
                <div class="font-weight-bold text-primary">
                  Şehir
                </div>
                {{ dataItem.cities.title }}
              </b-list-group-item>
              <b-list-group-item v-if="dataItem.districts">
                <div class="font-weight-bold text-primary">
                  Semt
                </div>
                {{ dataItem.districts.title }}
              </b-list-group-item>
            </b-list-group>

          </b-col>

          <b-col
            cols="12"
            md="3"
          >
            <b-list-group>
              <b-list-group-item v-if="dataItem.date_of_birth">
                <div class="font-weight-bold text-primary">
                  Doğum Tarihi
                </div>
                {{ moment(dataItem.date_of_birth).format('DD.MM.YYYY') }}
              </b-list-group-item>
              <b-list-group-item v-if="dataItem.customer_type">
                <div class="font-weight-bold text-primary">
                  Müşteri Tipi
                </div>
                {{ dataItem.customer_type.title }}
              </b-list-group-item>
            </b-list-group>

          </b-col>
          <b-col
            class="mt-2"
            cols="12"
            md="12"
          >
            <b-list-group>
              <b-list-group-item v-if="dataItem.address">
                <div class="font-weight-bold text-primary">
                  Adres
                </div>
                {{ dataItem.address }}
              </b-list-group-item>

            </b-list-group>

          </b-col>
        </b-row>
        <b-card-footer class="mt-3">
          <b-row>
            <b-col
              v-if="dataItem.created_by"
              md="auto"
            >

              <span class="font-weight-bold">
                <feather-icon icon="UserIcon" />
                {{ dataItem.created_by.name }} {{ dataItem.created_by.lastname }}
              </span>
              <div>
                <small>
                  {{ moment(dataItem.created_at).format('DD.MM.YYYY HH:mm:ss') }}
                </small>
              </div>
            </b-col>
            <b-col
              v-if="dataItem.updated_by"
              md="auto"
            >

              <span class="font-weight-bold text-warning">
                <feather-icon icon="EditIcon" />
                {{ dataItem.updated_by.name }} {{ dataItem.updated_by.lastname }}
              </span>
              <div>
                <small>
                  {{ moment(dataItem.updated_at).format('DD.MM.YYYY HH:mm:ss') }}
                </small>
              </div>
            </b-col>
          </b-row>
        </b-card-footer>
      </b-card>
    </template>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BListGroupItem, BTab, BTabs, BListGroup, BCardFooter,
} from 'bootstrap-vue'
import Loading from '@/layouts/components/loading.vue'

export default {
  name: 'View',
  components: {
    Loading,
    BCard,
    BRow,
    BCol,
    BButton,
    BListGroupItem,
    BTab,
    BTabs,
    BListGroup,
    BCardFooter,
  },
  computed: {
    dataItem() {
      return this.$store.getters['customers/dataItem']
    },
    dataLoading() {
      return this.$store.getters['customers/dataLoading']
    },
    downloadURL() {
      const url = `${this.$store.state.app.baseURL}/data/customers/exportPDF?token=${localStorage.getItem('downloadToken')}&id=${this.dataItem.id}`
      return url
    },
  },
  created() {
    this.getDataItem()
  },
  methods: {
    getDataItem() {
      this.$store.dispatch('customers/getDataItem', this.$route.params.id)
    },
  },
}
</script>
