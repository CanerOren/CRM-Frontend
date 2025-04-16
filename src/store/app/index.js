import { $themeBreakpoints } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    shallShowOverlay: false,
    baseURL: 'http://localhost:3000',
    removeTitle: 'Uyarı!',
    removeMessage: 'Kayıt kalıcı olarak silinecektir! Devam etmek istiyor musunuz?',
    removeConfirm: 'Devam Et',
    removeCancel: 'Vazgeç',
    removeResultTitle: 'İşlem Başarılı!',
    removeResultMessage: 'Kayıt kalıcı olarak silinmiştir.!',
    removeResultClose: 'Kapat',
    perPage: 20,
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
  },
  actions: {},
}
