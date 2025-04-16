import axiosIns from '@/libs/axios'

const ROOT_URL = '/Admin/core/cropper_upload'
export default {
  namespaced: true,
  state: {
    uploadData: {
      id: null,
      filename: null,
      thumb: null,
      filename_webp: null,
      thumb_webp: null,
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
    SET_UPLOAD_ITEM(state, data) {
      state.uploadData = data
    },
    SET_UPLOADING(state, data) {
      state.uploading = data
    },
  },
  actions: {
    uploadImage({ commit }, postData) {
      commit('SET_UPLOADING', true)
      const formData = new FormData()
      formData.append('folder', postData.folder)
      if (postData.resize) {
        formData.append('resize', postData.resize)
      }
      if (postData.width) {
        formData.append('width', postData.width)
      }
      if (postData.thumb) {
        formData.append('thumb', postData.thumb)
      }
      if (postData.webp) {
        formData.append('webp', postData.webp)
      }
      if (postData.ordering) {
        formData.append('ordering', postData.ordering)
      }
      if (postData.component) {
        formData.append('component', postData.component)
      }
      if (postData.params) {
        formData.append('params', postData.params)
      }
      if (postData.item_id) {
        formData.append('item_id', postData.item_id)
      }
      formData.append('upload_image', postData.upload_image, postData.filename)
      return axiosIns
        .post(ROOT_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          commit('SET_UPLOAD_ITEM', response.data.data)
          commit('SET_UPLOADING', false)
          return response.data
        })
        .catch(error => console.error(error))
    },
    removeData({ commit }, params) {
      return axiosIns
        .post(`${ROOT_URL}/deleteData`, params)
        .then(response => {
          commit('SET_DATA_SAVE', response.data)
          return response.data
        })
        .catch(error => console.error(error))
    },
  },
}
