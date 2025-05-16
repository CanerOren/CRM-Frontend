import axiosIns from '@/libs/axios'

const ROOT_URL = '/defines/meeting_lines'
export default {
  namespaced: true,
  state: {
    dataList: [],
    dataCounts: 0,
    dataItem: {
      id: null,
      title: null,
      id_meetings: null,
      id_meeting_contact_types: null,
      id_meeting_statuses: null,
      id_updated_by: null,
      id_created_by: null,
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
    RESET_DATA_ITEM(state, data) {
      if (data) {
        state.dataItem = {
          id: null,
          title: null,
          id_meetings: null,
          id_meeting_contact_types: null,
          id_meeting_statuses: null,
          id_updated_by: null,
          id_created_by: null,
          created_at: null,
          updated_at: null,
          deleted_at: null,
          // ordering: null,
          // slug: null,
          // submitStatus: false,
        }
      }
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
  },
}
