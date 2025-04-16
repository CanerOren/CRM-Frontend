<template>
  <div>
    <b-card>
      <b-row>
        <b-col
          cols="12"
        >
          <title-name />
        </b-col>
      </b-row>
    </b-card>
    <div
      v-for="(ability,key) in abilities"
      :key="key"
    >
      <b-card :title="ability.main_group">
        <b-card-sub-title class="mt-n1 mb-1">
          Yetkilendirme
        </b-card-sub-title>
        <b-list-group>
          <b-list-group-item
            v-for="(subgroup,subkey) in ability.subgroups"
            :key="subkey"
          >
            <div class="font-weight-bold text-primary">
              {{ subgroup.subgroup }}
            </div>
            <b-row>
              <b-col
                v-for="item in subgroup.items"
                :key="item.id"
                xs="12"
                md="4"
              >
                <b-form-checkbox
                  v-model="dataItem.user_type_ability"
                  :value="item.id"
                >
                  {{ item.title }}
                </b-form-checkbox>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BListGroup, BListGroupItem, BFormCheckbox, BCardSubTitle,
} from 'bootstrap-vue'
import TitleName from '@/views/Admin/User_types/elements/Title.vue'

export default {
  name: 'UserForm',
  components: {
    BCard,
    BRow,
    BCol,
    BListGroup,
    BListGroupItem,
    BFormCheckbox,
    BCardSubTitle,
    TitleName,
  },
  computed: {
    abilities() {
      return this.$store.getters['abilities/dataList']
    },
    dataItem() {
      return this.$store.getters['userTypes/dataItem']
    },
  },
  created() {
    this.getAbilities()
  },
  methods: {
    getAbilities() {
      this.$store.dispatch('abilities/getDataList')
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
