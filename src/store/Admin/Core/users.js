import axiosIns from '@/libs/axios'

const ROOT_URL = '/core/users'
export default {
  namespaced: true,
  state: {
    dataList: [],
    dataCounts: 0,
    dataItem: {
      name: null,
      id_user_types: null,
      lastname: null,
      id_updated_by: null,
      updated_at: null,
      id_created_by: null,
      created_at: null,
      email: null,
      id: null,
      phone: null,
      deleted_at: null,
      password: null,
      token: null,
      acces_token: null,
      refresh_token: null,
      download_token: null,
    },
    dataSave: {
      message: null,
      status: null,
      id: null,
    },
    forgotResult: {
      message: null,
      status: null,
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
    getForgotResult(state) {
      return state.forgotResult
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
        name: null,
        id_user_types: null,
        lastname: null,
        id_updated_by: null,
        updated_at: null,
        id_created_by: null,
        created_at: null,
        email: null,
        id: null,
        phone: null,
        deleted_at: null,
        password: null,
        token: null,
        acces_token: null,
        refresh_token: null,
        download_token: null,
      }
    },
    AUTH_FORGOT(state, data) {
      state.forgotResult = data
    },
  },
  actions: {
    getDataList({ commit }, params) {
      axiosIns
        .post(ROOT_URL, params)
        .then(response => {
          commit('SET_DATA_LIST', response.data.data)
          commit('SET_DATA_COUNTS', response.data.dataCount)
        })
        .catch(error => console.error(error))
    },
    getDataItem({ commit }, id) {
      axiosIns
        .post(`${ROOT_URL}/getRow`, { id })
        .then(response => {
          commit('SET_DATA_ITEM', response.data.data)
        })
        .catch(error => console.error(error))
    },
    saveData({ commit }, postData) {
      axiosIns
        .post(`${ROOT_URL}/createData`, postData)
        .then(response => {
          commit('SET_DATA_SAVE', response.data)
        })
        .catch(error => console.error(error))
    },
    removeData({ commit }, id) {
      axiosIns
        .post(`${ROOT_URL}/removeData`, { id })
        .then(response => {
          commit('SET_DATA_SAVE', response.data)
        })
        .catch(error => console.error(error))
    },
    forgotPassword({ commit }, postData) {
      const data = JSON.stringify(postData)
      axiosIns
        .post('/Auth/forgot', data)
        .then(response => {
          commit('AUTH_FORGOT', response.data)
        })
        .catch(error => console.error(error))
    },
  },
}
