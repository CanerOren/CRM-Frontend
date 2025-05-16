<template>
  <b-row>
    <b-col
      cols="12"
      md="4"
    >
      <b-card>
        <b-row>
          <b-col
            cols="12"
            md="12"
          >
            <b-form-input
              v-model="keyword"
              placeholder="Müşteri Adı, Firma Adı, Telefon No"
              :disabled="searching"
              @keydown.enter="searchCustomer"
            />
          </b-col>
          <b-col
            cols="12"
            md="12"
            class="mt-1 text-center"
          >
            <b-button
              :disabled="searching"
              class="mr-1"
              @click="searchCustomer"
            >
              <feather-icon
                v-if="!searching"
                icon="SearchIcon"
              />
              <b-spinner
                v-if="searching"
                small
              />
              Ara
            </b-button>
            <b-button
              :to="'/data/customers/add'"
              variant="danger"
            >
              <feather-icon icon="PlusIcon" />
              Müşteri Kartı Ekle
            </b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col>
      <b-card no-body>
        <b-table
          :items="dataList"
          :fields="fields"
          responsive="sm"
          striped
        >
          <template #cell(control)="data">
            <b-button
              size="sm"
              :to="nextAction+data.item.id"
              variant="outline-primary"
            >
              <feather-icon icon="PlusIcon" />
              Seç
            </b-button>
          </template>
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import {
  BCard, BRow, BCol, BButton, BFormInput, BTable, BSpinner,
} from 'bootstrap-vue'

export default {
  name: 'CustomerSearch',
  components: {
    BCard, BRow, BCol, BButton, BFormInput, BTable, BSpinner,
  },
  props: {
    nextAction: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      keyword: null,
      searching: false,
      fields: [
        {
          key: 'name',
          label: 'Müşteri',
        },
        {
          key: 'phone',
          label: 'Telefon',
          thClass: 'width-200 text-nowrap',
          tdClass: 'width-200 text-nowrap',
        },
        {
          key: 'control',
          label: '',
          thClass: 'width-200 text-nowrap',
          tdClass: 'width-200 text-nowrap',
        },

      ],
    }
  },
  computed: {
    dataList() {
      return this.$store.getters['customers/dataList']
    },
  },
  created() {
    this.getDataList()
  },
  methods: {
    getDataList() {
      this.$store.dispatch('customers/getDataList', {
        take: 10,
        orderBy: {
          id: 'desc',
        },
        select: {
          id: true,
          company: true,
          name: true,
          phone: true,

        },
      })
    },
    searchCustomer() {
      this.searching = true
      if (this.keyword) {
        this.$store.dispatch('customers/getDataList', {
          select: {
            id: true,
            company: true,
            name: true,
            phone: true,
          },
          where: {
            OR: [
              {
                company: {
                  contains: this.keyword,
                },
              },
              {
                name: {
                  contains: this.keyword,
                },
              },
              {
                email: {
                  contains: this.keyword,
                },
              },
              {
                phone: {
                  contains: this.keyword,
                },
              },
            ],
          },
        }).then(response => {
          if (response) {
            this.searching = false
          }
        })
      }
    },
  },
}
</script>
