import axiosIns from '@/libs/axios'

const ROOT_URL = '/Admin/core/file_upload'
export default {
  namespaced: true,
  state: {
    uploadFile: {
      id: null,
      filename: null,
      filetype: null,
      ordering: null,
      component: null,
      params: null,
      item_id: null,
      id_users: null,
    },
    dataSave: {
      message: null,
      status: null,
      id: null,
    },
    uploading: false,
  },
  getters: {
    dataSaveStatus(state) {
      return state.dataSave
    },
    uploading(state) {
      return state.uploading
    },
  },
  mutations: {
    SET_DATA_SAVE(state, data) {
      state.dataSave = data
    },
    SET_UPLOAD_FILE(state, data) {
      state.uploadFile = data
    },
    SET_UPLOADING(state, data) {
      state.uploading = data
    },
  },
  actions: {
    uploadFile({ commit }, postData) {
      commit('SET_UPLOADING', true)
      const formData = new FormData()
      formData.append('folder', postData.folder)
      formData.append('ordering', postData.ordering)
      formData.append('component', postData.component)
      formData.append('params', postData.params)
      formData.append('item_id', postData.item_id)
      formData.append('upload_file', postData.upload_file)
      return axiosIns
        .post(ROOT_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          commit('SET_UPLOAD_FILE', response.data.data)
          commit('SET_UPLOADING', false)
          return response.data
        })
        .catch(error => console.error(error))
    },
    removeData({ commit }, id) {
      return axiosIns
        .post(`${ROOT_URL}/deleteData`, { id })
        .then(response => {
          commit('SET_DATA_SAVE', response.data)
          return response.data
        })
        .catch(error => console.error(error))
    },
  },
}
