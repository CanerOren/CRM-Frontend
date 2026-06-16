import axiosIns from '@/libs/axios'

const ROOT_URL = '/data/indicata'

export default {
  namespaced: true,
  state: {
    formData: {
      identification: {
        category: null,
        make: null,
        model: null,
        modelYear: null,
        body: null,
        engine: null,
        hp: null,
        ccm: null,
        fuelType: null,
        transmission: null,
        odometer: null,
        trim: null,
        appraisal: null,
        color: null,
        paint_type: null,
      },
      condition: {
        front_bonnet: { damage_type: null },
        left_front_fender: { damage_type: null },
        left_front_door: { damage_type: null },
        left_rear_door: { damage_type: null },
        left_rear_fender: { damage_type: null },
        roof: { damage_type: null },
        trunk: { damage_type: null },
        right_rear_fender: { damage_type: null },
        right_rear_door: { damage_type: null },
        right_front_door: { damage_type: null },
        right_front_fender: { damage_type: null },
        front_bumper: { damage_type: null },
        rear_bumper: { damage_type: null },
        left_rocker_board: { damage_type: null },
        right_rocker_board: { damage_type: null },
      },
      accessories: {
        sunroof: false,
        panorama_roof: false,
        black_roof: false,
        leather_upholstery: false,
        ventilated_seats: false,
        heated_seats: false,
        vacuum_doors: false,
        parking_camera: false,
        camera_360: false,
        front_camera: false,
        front_park_sensor: false,
        rear_park_sensor: false,
        xenon_lights: false,
        led_lights: false,
        adaptive_cruise_control: false,
        line_assist: false,
        blind_spot_alarm: false,
        anti_collision_system: false,
        sound_system: false,
        electric_driver_seat: false,
        memory_driver_seat: false,
        electric_passenger_seat: false,
        memory_passenger_seat: false,
        electric_folding_side_mirrors: false,
        electric_trunk: false,
        security_packet: false,
        two_color: false,
      },
    },
    dataLoading: false,
  },
  getters: {
    formData: state => state.formData,
    dataLoading: state => state.dataLoading,
  },
  mutations: {
    SET_FORM_DATA(state, data) {
      state.formData = data
    },
    SET_DATA_LOADING(state, status) {
      state.dataLoading = status
    },
    RESET_FORM_DATA(state) {
      state.formData = {
        identification: { /* ... */ },
        condition: { /* ... */ },
        accessories: { /* ... */ },
      }
    },
  },
  actions: {
    async getDataItem({ commit }, params) {
      commit('SET_DATA_LOADING', true)
      return axiosIns
        .post(`${ROOT_URL}/getRow`, { params })
        .then(response => {
          commit('SET_DATA_LOADING', response.data)
          commit('SET_DATA_LOADING', false)
          return response.data.data
        })
        .catch(error => console.error(error))
    },
  },
}
