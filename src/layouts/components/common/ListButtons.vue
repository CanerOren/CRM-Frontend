<template>
  <div>
    <template v-if="deleteAction && dataId">
      <b-dropdown
        split
        :text="primaryAction ? 'Görüntüle' : 'Güncelle' "
        variant="outline-primary"
        right
        size="sm"
        @click="$router.push(primaryAction ? primaryAction : editAction)"
      >
        <template
          v-if="primaryAction"
          #button-content
        >
          <feather-icon
            icon="EyeIcon"
          />
          Görüntüle
        </template>
        <template
          v-if="!primaryAction"
          #button-content
        >
          <feather-icon
            icon="EditIcon"
          />
          Güncelle
        </template>
        <b-dropdown-item
          v-if="editAction && primaryAction"
          :to="editAction"
        >
          <feather-icon icon="EditIcon" />
          <span class="align-middle ml-50">
            Güncelle
          </span>
        </b-dropdown-item>
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
    primaryAction: {
      type: String,
      required: false,
    },
    editAction: {
      type: String,
      required: false,
    },
    dataId: {
      type: Number,
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
