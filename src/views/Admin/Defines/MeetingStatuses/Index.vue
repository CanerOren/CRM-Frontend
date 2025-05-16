<template>
  <b-card no-body>
    <b-card-body>
      <div class="text-right">
        <b-button
          variant="primary"
          :to="$route.path + '/add'"
        >
          <FeatherIcon icon="PlusIcon" /> Oluştur
        </b-button>
      </div>
    </b-card-body>
    <b-table
      responsive="sm"
      :fields="fields"
      :items="dataList"
      striped
    >
      <template #cell(title)="data">
        {{ data.item.title }}
      </template>
      <template #cell(control)="data">
        <div class="text-right">
          <list-buttons
            :edit-action="$route.path + '/edit/' + data.item.id"
            :delete-action="removeData"
            :data-id="data.item.id"
          />
        </div>
      </template>
      <template #cell(created_by)="data">
        <div v-if="data.item.created_by">
          {{ data.item.created_by.name }} {{ data.item.created_by.lastname }}
        </div>
      </template>
      <template #cell(updated_by)="data">
        <div v-if="data.item.updated_by">
          {{ data.item.updated_by.name }} {{ data.item.updated_by.lastname }}
        </div>
      </template>
      <template #cell(created_at)="data">
        <div v-if="data.item.created_at">
          {{ formatDate(data.item.created_at) }}
        </div>
      </template>
      <template #cell(updated_at)="data">
        <div v-if="data.item.updated_at">
          {{ formatDate(data.item.updated_at) }}
        </div>
      </template>
    </b-table>
    <b-card-footer>
      <b-pagination
        v-model="currentPage"
        :total-rows="dataCounts"
        :per-page="perPage"
        first-number
        last-number
        prev-class="prev-item"
        next-class="next-item"
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
    </b-card-footer>
  </b-card>
</template>
<script>
import {
  BCard, BCardBody, BTable, BPagination, BButton, BCardFooter,
} from 'bootstrap-vue'
import ListButtons from '@/layouts/components/common/ListButtons.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import moment from 'moment'

export default {
  name: 'Index',
  components: {
    BCard,
    BCardBody,
    BTable,
    BPagination,
    BButton,
    BCardFooter,
    ListButtons,
  },
  data() {
    return {
      currentPage: 1,
      perPage: this.$store.state.app.perPage,
      fields: [
        {
          key: 'title',
          label: 'Görüşmenin Durumu',
        },
        {
          key: 'created_by',
          label: 'Oluşturanın Adı',
        },
        {
          key: 'updated_by',
          label: 'Güncelleyenin Adı',
        },
        {
          key: 'created_at',
          label: 'Oluşturulduğu Tarih',
        },
        {
          key: 'updated_at',
          label: 'Güncellendiği Tarih',
        },
        {
          key: 'control',
          label: '',
          thClass: 'width-100 text-nowrap',
          tdClass: 'width-100 text-nowrap',
        },
      ],
      dataQuery: {
        select: {
          id: true,
          title: true,
          id_created_by: true,
          created_by: {
            select: {
              name: true,
              lastname: true,
            },
          },
          id_updated_by: true,
          updated_by: {
            select: {
              name: true,
              lastname: true,
            },
          },
          created_at: true,
          updated_at: true,
          deleted_at: true,
        },
        take: this.$store.state.app.perPage,
        skip: 0,
      },
    }
  },
  computed: {
    dataList() {
      return this.$store.getters['meetingStatuses/dataList']
    },
    dataCounts() {
      return this.$store.getters['meetingStatuses/dataCounts']
    },
    saveData() {
      return this.$store.getters['meetingStatuses/dataSaveStatus']
    },
  },
  watch: {
    currentPage(val) {
      this.dataQuery.skip = (val - 1) * this.$store.state.app.perPage
      this.getDataList()
    },
    saveData(val) {
      if (val.status === true) {
        this.showToast({
          variant: 'success', title: 'İşlem Başarılı!', icon: 'CheckIcon', text: val.message,
        })
      } else if (val.status === false) {
        this.showToast({
          variant: 'danger', title: 'İşlem Hatası!', icon: 'XIcon', text: val.message,
        })
      }
      this.getDataList()
    },
  },
  created() {
    this.getDataList()
  },
  methods: {
    getDataList() {
      this.$store.dispatch('meetingStatuses/getDataList', this.dataQuery)
    },
    removeData(id) {
      this.$swal({
        title: this.$store.state.app.removeTitle,
        text: this.$store.state.app.removeMessage,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$store.state.app.removeConfirm,
        cancelButtonText: this.$store.state.app.removeCancel,
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.$store.dispatch('meetingStatuses/removeData', id)
          this.$swal({
            icon: 'success',
            title: this.$store.state.app.removeResultTitle,
            text: this.$store.state.app.removeResultMessage,
            confirmButtonText: this.$store.state.app.removeResultClose,
            customClass: {
              confirmButton: 'btn btn-success',
            },
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
      })
    },
    formatDate(date) {
      return moment(date).format('DD-MM-YYYY HH:mm')
    },
  },
}
</script>
