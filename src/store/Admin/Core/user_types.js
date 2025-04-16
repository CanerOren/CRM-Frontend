import axiosIns from '@/libs/axios'

const ROOT_URL = '/Admin/core/user_types'
export default {
  namespaced: true,
  state: {
    dataList: [],
    dataCounts: 0,
    dataItem: {
      id: null,
      title: null,
      user_type_ability: [],
    },
    dataSave: {
      message: null,
      status: null,
      id: null,
    },
  },
  getters: {
    dataList(state) {
      return state.dataList
    },
    dataCounts(state) {
      return state.dataCounts
    },
    dataItem(state) {
      return state.dataItem
    },
    dataSaveStatus(state) {
      return state.dataSave
    },
  },
  mutations: {
    SET_DATA_LIST(state, data) {
      state.dataList = data
    },
    SET_DATA_ITEM(state, data) {
      state.dataItem = data
    },
    SET_DATA_COUNTS(state, data) {
      state.dataCounts = data
    },
    SET_DATA_SAVE(state, data) {
      state.dataSave = data
    },
    RESET_DATA_ITEM(state) {
      state.dataItem = {
        id: null,
        title: null,
        user_type_ability: [],
      }
    },
  },
  actions: {
    getDataList({ commit }, params) {
      const data = JSON.stringify(params)
      axiosIns
        .post(ROOT_URL, data)
        .then(response => {
          commit('SET_DATA_LIST', response.data.data)
          commit('SET_DATA_COUNTS', response.data.count)
        })
        .catch(error => console.error(error))
    },
    getDataItem({ commit }, id) {
      const data = JSON.stringify({
        where: {
          'user_types.id': id,
        },
        array: false,
      })
      axiosIns
        .post(ROOT_URL, data)
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
    removeData({ commit }, id) {
      axiosIns
        .post(`${ROOT_URL}/deleteData`, { id })
        .then(response => {
          commit('SET_DATA_SAVE', response.data)
        })
        .catch(error => console.error(error))
    },
  },
}
