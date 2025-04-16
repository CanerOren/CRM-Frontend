<template>
  <div>
    <template v-if="deleteAction && dataId">
      <b-dropdown
        split
        text="Güncelle"
        variant="outline-primary"
        right
        size="sm"
        @click="$router.push(editAction)"
      >
        <template #button-content>
          <feather-icon
            icon="EditIcon"
          />
          Güncelle
        </template>
        <b-dropdown-item
          v-if="deleteAction && dataId"
          @click="deleteAction(dataId)"
        >
          <feather-icon icon="XIcon" />
          <span class="align-middle ml-50">Sil</span>
        </b-dropdown-item>
      </b-dropdown>
    </template>
    <template v-else>
      <b-button
        :to="editAction"
        variant="outline-primary"
        size="sm"
      >
        <feather-icon
          icon="EditIcon"
        />
        Güncelle
      </b-button>
    </template>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem, BButton } from 'bootstrap-vue'

export default {
  name: 'ListButtons',
  components: {
    BDropdown, BDropdownItem, BButton,
  },
  props: {
    editAction: {
      type: String,
      required: true,
    },
    dataId: {
      type: String,
      required: false,
      default: null,
    },
    deleteAction: {
      type: Function,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>

</style>
