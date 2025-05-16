import axiosIns from '@/libs/axios'

const ROOT_URL = '/data/customer_requests'
export default {
  namespaced: true,
  state: {
    dataList: [],
    dataCounts: 0,
    dataItem: {
      id: null,
      id_customers: null,
      id_customer_request_types: null,
      id_customer_request_subjects: null,
      id_customer_request_importances: null,
      id_manager_user: null,
      id_customer_request_statuses: null,
      notes: null,
      id_created_by: null,
      id_updated_by: null,
      created_at: null,
      updated_at: null,
      deleted_at: null,
      // ordering: null,
      // slug: null,
      // submitStatus: false,
    },
    dataSave: {
      message: null,
      status: null,
      id: null,
    },
    dataLoading: false,
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
    dataLoading(state) {
      return state.dataLoading
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
    RESET_DATA_ITEM(state, data) {
      if (data) {
        state.dataItem = {
          id: null,
          id_customers: null,
          id_customer_request_types: null,
          id_customer_request_subjects: null,
          id_customer_request_importances: null,
          id_manager_user: null,
          id_customer_request_statuses: null,
          notes: null,
          id_created_by: null,
          id_updated_by: null,
          created_at: null,
          updated_at: null,
          deleted_at: null,
          // ordering: null,
          // slug: null,
          // submitStatus: false,
        }
      }
    },
    SET_DATA_LOADING(state, status) {
      state.dataLoading = status
    },
  },
  actions: {
    getDataList({ commit }, params) {
      commit('SET_DATA_LOADING', true)
      return axiosIns
        .post(ROOT_URL, params)
        .then(response => {
          commit('SET_DATA_LIST', response.data.data)
          commit('SET_DATA_COUNTS', response.data.dataCount)
          commit('SET_DATA_LOADING', false)
          return response.data.data
        })
        .catch(error => console.error(error))
    },
    getDataItem({ commit }, id) {
      commit('SET_DATA_LOADING', true)
      return axiosIns
        .post(`${ROOT_URL}/getRow`, { id })
        .then(response => {
          commit('SET_DATA_ITEM', response.data.data)
          commit('SET_DATA_LOADING', false)
          return response.data.data
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
  },
}
