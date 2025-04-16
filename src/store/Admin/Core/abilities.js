import axiosIns from '@/libs/axios'

const ROOT_URL = '/Admin/core/abilities'
export default {
  namespaced: true,
  state: {
    dataList: [],
  },
  getters: {
    dataList(state) {
      return state.dataList
    },
  },
  mutations: {
    SET_DATA_LIST(state, data) {
      state.dataList = data
    },
  },
  actions: {
    getDataList({ commit }, params) {
      const data = JSON.stringify(params)
      axiosIns
        .post(ROOT_URL, data)
        .then(response => {
          commit('SET_DATA_LIST', response.data.data)
        })
        .catch(error => console.error(error))
    },
  },
}
