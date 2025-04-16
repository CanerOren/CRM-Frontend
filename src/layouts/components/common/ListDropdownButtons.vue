<template>
  <b-dropdown
    variant="outline-primary"
    :text="primaryText"
    left
    split
    size="sm"
    @click="$router.push(primaryAction)"
  >
    <b-dropdown-item
      v-if="editAction"
      :to="editAction"
    >
      <feather-icon icon="EditIcon" />
      <span class="align-middle ml-50">{{ editText }}</span>
    </b-dropdown-item>
    <b-dropdown-divider v-if="editAction" />
    <b-dropdown-item
      v-if="deleteAction && dataId"
      @click="deleteAction(dataId)"
    >
      <feather-icon icon="XIcon" />
      <span class="align-middle ml-50">Sil</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue'

export default {
  name: 'ListButtons',
  components: {
    BDropdown, BDropdownItem, BDropdownDivider,
  },
  props: {
    primaryText: {
      type: String,
      required: true,
    },
    primaryAction: {
      type: String,
      required: true,
    },
    editText: {
      type: String,
      default: 'Güncelle',
    },
    editAction: {
      type: String,
      required: false,
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
