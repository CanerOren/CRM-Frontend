<template>
  <b-card no-body>
    <b-card-body class="text-right">
      <b-button
        variant="primary"
        :to="$route.path + '/add'"
      >
        <FeatherIcon icon="PlusIcon" /> Oluştur
      </b-button>
    </b-card-body>
    <b-table
      responsive="sm"
      :fields="fields"
      :items="dataList"
      striped
    >
      <template #cell(user_type)="data">
        <div v-if="data.item.user_type">
          {{ data.item.user_type.title }}
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
        {{ formatDate(data.item.created_at) }}
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
          key: 'name',
          label: 'Adı',
        },
        {
          key: 'lastname',
          label: 'Soyadı',
        },
        {
          key: 'user_type',
          label: 'Kullanıcı Seviyesi',
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
          label: 'Oluşturulma Tarihi',
        },
        {
          key: 'control',
          label: '',
          thStyle: { width: '200px' },
        },
      ],
      dataQuery: {
        select: {
          id: true,
          name: true,
          lastname: true,
          id_created_by: true,
          created_by: {
            select: {
              name: true,
              lastname: true,
            },
          },
          updated_by: {
            select: {
              name: true,
              lastname: true,
            },
          },
          created_at: true,
          user_type: {
            select: {
              title: true,
            },
          },
        },
        take: this.$store.state.app.perPage,
        skip: 0,
      },
    }
  },
  computed: {
    dataList() {
      return this.$store.getters['users/dataList']
    },
    dataCounts() {
      return this.$store.getters['users/dataCounts']
    },
    saveData() {
      return this.$store.getters['users/dataSaveStatus']
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
      this.$store.dispatch('users/getDataList', this.dataQuery)
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
          this.$store.dispatch('users/removeData', id)
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
