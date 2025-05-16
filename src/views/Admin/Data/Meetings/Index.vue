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
      :key="tableKey"
      responsive="sm"
      :fields="fields"
      :items="dataList"
      striped
    >
      <template #cell(control)="data">
        <div class="text-right">
          <b-button
            variant="outline-primary"
            size="sm"
            @click="removeData(data.item.id)"
          >
            <feather-icon icon="XIcon" />
            Sil
          </b-button>
        </div>
      </template>
      <template #cell(title)="data">
        {{ data.item.title }}
      </template>
      <template #cell(id)="data">
        <b-link
          class="text-primary"
          style="cursor:pointer;"
          @click="goToView(data.item.id)"
        >
          {{ data.item.id }}
        </b-link>
      </template>
      <template #cell(customer)="data">
        <div v-if="data.item.customer">
          {{ data.item.customer.name }} {{ data.item.customer.last_name }}
          <div>
            <small class="text-primary">
              {{ data.item.customer.company }}
            </small>
            <small>
              <b-badge :variant="data.item.status.variant">
                {{ data.item.status.title }}
              </b-badge>
            </small>
          </div>
        </div>
      </template>
      <template #cell(created_at)="data">
        <div v-if="data.item.created_at">
          {{ moment(data.item.created_at).format('DD.MM.YYYY HH:mm:ss') }}
        </div>
      </template>
      <template #cell(updated_at)="data">
        <div v-if="data.item.updated_at">
          {{ moment(data.item.updated_at).format('DD.MM.YYYY HH:mm:ss') }}
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
  BCard, BCardBody, BTable, BPagination, BButton, BCardFooter, BBadge, BLink,
} from 'bootstrap-vue'
import ListButtons from '@/layouts/components/common/ListButtons.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

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
    BLink,
    ListButtons,
  },
  data() {
    return {
      tableKey: 0,
      currentPage: 1,
      perPage: this.$store.state.app.perPage,
      fields: [
        {
          key: 'id',
          label: 'Id',
        },
        {
          key: 'customer',
          label: 'Müşteri',
        },

        {
          key: 'meeting_type.title',
          label: 'Görüşme Tipi',
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
          meeting_type: {
            select: {
              title: true,
            },
          },
          customer: {
            select: {
              company: true,
              name: true,
              last_name: true,
            },
          },
          subject: {
            select: {
              title: true,
            },
          },
          contact_type: {
            select: {
              title: true,
            },
          },

          status: {
            select: {
              title: true,
              variant: true,
            },
          },
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
      return this.$store.getters['meetings/dataList']
    },
    dataCounts() {
      return this.$store.getters['meetings/dataCounts']
    },
    saveData() {
      return this.$store.getters['meetings/dataSaveStatus']
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
      this.$store.dispatch('meetings/getDataList', this.dataQuery).then(() => {
        this.tableKey += 1
      })
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
          this.$store.dispatch('meetings/removeData', id)
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
    goToView(id) {
      this.$router.push(`/data/meetings/view/${id}`)
    },
  },
}
</script>
