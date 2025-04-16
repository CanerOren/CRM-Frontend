import axiosIns from '@/libs/axios'

const ROOT_URL = '/Admin/core/smtpconfig'
export default {
  namespaced: true,
  state: {
    dataItem: {},
    dataSave: {
      message: null,
      status: null,
      id: null,
    },
  },
  getters: {
    dataItem(state) {
      return state.dataItem
    },
    dataSaveStatus(state) {
      return state.dataSave
    },
  },
  mutations: {
    SET_DATA_ITEM(state, data) {
      state.dataItem = data
    },
    SET_DATA_SAVE(state, data) {
      state.dataSave = data
    },
  },
  actions: {
    getDataItem({ commit }) {
      axiosIns
        .post(ROOT_URL)
        .then(response => {
          commit('SET_DATA_ITEM', response.data.data)
        })
        .catch(error => console.error(error))
    },
    saveData({ commit }, postData) {
      const data = JSON.stringify(postData)
      axiosIns
        .post(`${ROOT_URL}/saveData`, data)
        .then(response => {
          commit('SET_DATA_SAVE', response.data)
        })
        .catch(error => console.error(error))
    },
  },
}
