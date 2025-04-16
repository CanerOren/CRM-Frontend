<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow"
    :class="[
      { 'expanded': !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered) },
      skin === 'semi-dark' ? 'menu-dark' : 'menu-light'
    ]"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)"
  >
    <!-- main menu header-->
    <div class="navbar-header expanded">
      <slot
        name="header"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        :toggleCollapsed="toggleCollapsed"
        :collapseTogglerIcon="collapseTogglerIcon"
      >
        <ul class="nav navbar-nav flex-row">

          <!-- Logo & Text -->
          <li class="nav-item mr-auto">
            <b-link
              class="navbar-brand"
              to="/"
            >
              <span
                v-if="isVerticalMenuCollapsed && isMouseHovered === false"
                class="brand-logo"
              >
                <b-img
                  v-if="skin === 'light'"
                  :src="appLogoImage"
                  alt="logo"
                />
                <b-img
                  v-else
                  :src="appLogoImageWhite"
                  alt="logo"
                />
              </span>
              <span
                v-else
                class="brand-logo brand-logo-full"
              >
                <b-img
                  v-if="skin === 'light'"
                  :src="appFullLogoImage"
                  alt="logo"
                />
                <b-img
                  v-else
                  :src="appFullLogoImageWhite"
                  alt="logo"
                />
              </span>
              <!--
              <h2 class="brand-text">
                {{ appName }}
              </h2> -->
            </b-link>
          </li>

          <!-- Toggler Button -->
          <li class="nav-item nav-toggle">
            <b-link class="nav-link modern-nav-toggle">
              <feather-icon
                icon="XIcon"
                size="20"
                class="d-block d-xl-none"
                @click="toggleVerticalMenuActive"
              />
              <feather-icon
                :icon="collapseTogglerIconFeather"
                size="20"
                class="d-none d-xl-block collapse-toggle-icon"
                @click="toggleCollapsed"
              />
            </b-link>
          </li>
        </ul>
      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div
      :class="{'d-block': shallShadowBottom}"
      class="shadow-bottom"
    />

    <!-- main menu content-->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="main-menu-content scroll-area"
      tagname="ul"
      @ps-scroll-y="evt => { shallShadowBottom = evt.srcElement.scrollTop > 0 }"
    >
      <vertical-nav-menu-items
        :items="navMenuItems"
        class="navigation navigation-main"
      />
      <div
        v-if="userData.id_member_type"
        class="text-center full-width pl-1 pr-1 position-fixed position-bottom-0 mb-2"
      >
        <div v-if="userData.id_member_type === '1'">
          <b-button
            variant="primary"
            block
            :to="'/girisimci-basvurusu'"
          >
            <span v-if="isVerticalMenuCollapsed && isMouseHovered === true">
              <FeatherIcon icon="PlusIcon" />
              {{ $t('Girişim Ekle') }}
            </span>
            <span v-else>
              <FeatherIcon icon="PlusIcon" />
              {{ $t('Girişim Ekle') }}
            </span>
          </b-button>
        </div>
        <div v-if="userData.id_member_type === '2'">
          <b-button
            variant="primary"
            block
            :to="'/yatirimci-profili/yeni-olustur'"
          >
            <span v-if="isVerticalMenuCollapsed && isMouseHovered === true">
              <FeatherIcon icon="PlusIcon" />
              {{ $t('Şirket Ekle') }}
            </span>
            <span v-else>
              <FeatherIcon icon="PlusIcon" />
              {{ $t('Şirket Ekle') }}
            </span>
          </b-button>
        </div>
      </div>
    </vue-perfect-scrollbar>
    <!-- /main menu content-->
  </div>
</template>

<script>
import navMenuItems from '@/navigation/vertical'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { BLink, BImg, BButton } from 'bootstrap-vue'
import { provide, computed, ref } from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'
import { $themeConfig } from '@themeConfig'
import VerticalNavMenuItems from './components/vertical-nav-menu-items/VerticalNavMenuItems.vue'
import useVerticalNavMenu from './useVerticalNavMenu'

export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink,
    BImg,
    BButton,
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true,
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    }
  },
  setup(props) {
    const {
      isMouseHovered,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      updateMouseHovered,
    } = useVerticalNavMenu(props)

    const { skin } = useAppConfig()

    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    const shallShadowBottom = ref(false)

    provide('isMouseHovered', isMouseHovered)

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    const collapseTogglerIconFeather = computed(() => (collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon'))

    // App Name
    const {
      appName, appLogoImage, appFullLogoImage, appLogoImageWhite, appFullLogoImageWhite,
    } = $themeConfig.app
    return {
      navMenuItems,
      perfectScrollbarSettings,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      isMouseHovered,
      updateMouseHovered,
      collapseTogglerIconFeather,

      // Shadow Bottom
      shallShadowBottom,
      // Skin
      skin,
      // App Name
      appName,
      appLogoImage,
      appLogoImageWhite,
      appFullLogoImage,
      appFullLogoImageWhite,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/vertical-menu.scss";
</style>
<style>
.navbar-brand{
    margin-top: 10px !important;
}
.brand-logo{
}
.brand-logo-full{
    max-width: 150px !important;
    width: 150px !important;
}
.brand-logo-full svg,
.brand-logo-full img{
  max-width: 155px !important;
}
</style>
