<template>
  <b-card no-body>
    <b-card-body>
      <div class="text-right">
        <b-button
          variant="primary"
          :to="$route.path + '/search-customer'"
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
            :primary-action="$route.path + '/view/' +data.item.id"
            :edit-action="$route.path + '/edit/' + data.item.id"
            :delete-action="removeData"
            :data-id="data.item.id"
          />
        </div>
      </template>
      <template #cell(customer)="data">
        <div v-if="data.item.customer">
          {{ data.item.customer.name }} {{ data.item.customer.last_name }}
          <div>
            <small class="text-primary">
              {{ data.item.customer.company }}
            </small>
          </div>
        </div>
      </template>
      <template #cell(notes)="data">
        <div v-if="data.item.notes">
          {{ data.item.notes }}
        </div>
      </template>
      <template #cell(customer_request_statuses)="data">
        <div v-if="data.item.customer_request_statuses">
          <b-badge
            :variant="data.item.customer_request_statuses.variant"
          >
            {{ data.item.customer_request_statuses.title }}
          </b-badge>
        </div>
      </template>
      <template #cell(request_importance)="data">
        <div v-if="data.item.request_importance">
          <b-badge :variant="data.item.request_importance.variant">
            {{ data.item.request_importance.title }}
          </b-badge>
        </div>
      </template>
      <template #cell(created_by)="data">
        <div v-if="data.item.created_by">
          {{ data.item.created_by.name }} {{ data.item.created_by.lastname }}
        </div>
      </template>
      <template #cell(manager_user)="data">
        <div v-if="data.item.manager_user">
          {{ data.item.manager_user.name }} {{ data.item.manager_user.lastname }}
        </div>
      </template>
      <template #cell(created_at)="data">
        <div v-if="data.item.created_at">
          {{ moment(data.item.created_at).format('DD.MM.YYYY HH:mm:ss') }}
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
  BCard, BCardBody, BTable, BPagination, BButton, BCardFooter, BBadge,
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
    BBadge,
    ListButtons,
  },
  data() {
    return {
      currentPage: 1,
      perPage: this.$store.state.app.perPage,
      fields: [
        {
          key: 'customer',
          label: 'Müşteri',
        },
        {
          key: 'notes',
          label: 'Not',
          thStyle: { width: '50%' },
        },
        {
          key: 'customer_request_statuses',
          label: 'Durum',
        },
        {
          key: 'request_importance',
          label: 'Önem',
        },
        {
          key: 'created_by',
          label: 'Oluşturan',
        },
        {
          key: 'manager_user',
          label: 'Yetkili',
        },
        {
          key: 'created_at',
          label: 'Oluşturulduğu Tarih',
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
          id_customers: true,
          customer: {
            select: {
              id: true,
              name: true,
              last_name: true,
              company: true,
            },
          },
          id_customer_request_types: true,
          id_customer_request_subjects: true,
          id_customer_request_importances: true,
          id_manager_user: true,
          manager_user: {
            select: {
              id: true,
              name: true,
              lastname: true,
            },
          },
          id_customer_request_statuses: true,
          customer_request_statuses: {
            select: {
              title: true,
              variant: true,
              status: true,
            },
          },
          request_importance: {
            select: {
              id: true,
              title: true,
              variant: true,
            },
          },
          id_created_by: true,
          notes: true,
          id_updated_by: true,
          created_at: true,
          created_by: {
            select: {
              id: true,
              name: true,
              lastname: true,
            },
          },
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
      return this.$store.getters['customerRequests/dataList']
    },
    dataCounts() {
      return this.$store.getters['customerRequests/dataCounts']
    },
    saveData() {
      return this.$store.getters['customerRequests/dataSaveStatus']
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
      this.$store.dispatch('customerRequests/getDataList', this.dataQuery)
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
          this.$store.dispatch('customerRequests/removeData', id)
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
