<template>
  <div>
    <b-card>
      <b-row>
        <b-col
          cols="12"
          md="6"
        >
          <customer-request-type />
        </b-col>
        <b-col
          cols="12"
          md="6"
        >
          <customer-request-subject />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          md="6"
        >
          <customer-request-importances />
        </b-col>
        <b-col
          cols="12"
          md="3"
        >
          <manager-user />
        </b-col>
        <b-col
          cols="12"
          md="3 "
        >
          <customer-request-statuses />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
        >
          <customer-note />
        </b-col>
      </b-row>
    </b-card>

  </div>
</template>

<script>
import {
  BCard, BRow, BCol,
} from 'bootstrap-vue'
import CustomerRequestType from '@/views/Admin/Data/CustomerRequests/elements/CustomerRequestType.vue'
import CustomerRequestSubject from '@/views/Admin/Data/CustomerRequests/elements/CustomerRequestSubjects.vue'
import CustomerRequestImportances from '@/views/Admin/Data/CustomerRequests/elements/CustomerRequestImportances.vue'
import CustomerNote from '@/views/Admin/Data/CustomerRequests/elements/CustomerNote.vue'
import ManagerUser from '@/views/Admin/Data/CustomerRequests/elements/ManagerUsers.vue'
import CustomerRequestStatuses from '@/views/Admin/Data/CustomerRequests/elements/RequestStatus.vue'

export default {
  name: 'ItemForm',
  components: {
    BCard,
    BRow,
    BCol,
    CustomerRequestType,
    CustomerRequestSubject,
    CustomerRequestImportances,
    CustomerNote,
    ManagerUser,
    CustomerRequestStatuses,
  },
  computed: {
    dataItem() {
      return this.$store.getters['customerRequests/dataItem']
    },
  },
}
</script>
