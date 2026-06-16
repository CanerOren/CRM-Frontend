<template>
  <b-card title="Araç Aksesuarları">
    <b-row>
      <b-col
        cols="12"
        md="2"
      >
        <sunroof />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <panorama-roof v-model="formData.accessories.panorama_roof" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <black-roof v-model="formData.accessories.black_roof" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <leather-upholstery v-model="formData.accessories.leather_upholstery" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <ventilated-seats v-model="formData.accessories.ventilated_seats" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <heated-seats v-model="formData.accessories.heated_seats" />
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        cols="12"
        md="2"
      >
        <vacuum-doors v-model="formData.accessories.vacuum_doors" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <parking-camera v-model="formData.accessories.parking_camera" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <camera360 v-model="formData.accessories.camera_360" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <front-camera v-model="formData.accessories.front_camera" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <front-park-sensor v-model="formData.accessories.front_park_sensor" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <rear-park-sensor v-model="formData.accessories.rear_park_sensor" />
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        cols="12"
        md="2"
      >
        <xenon-lights v-model="formData.accessories.xenon_lights" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <led-lights v-model="formData.accessories.led_lights" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <adaptive-cruise-control v-model="formData.accessories.adaptive_cruise_control" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <line-assist v-model="formData.accessories.line_assist" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <blind-spot-alarm v-model="formData.accessories.blind_spot_alarm" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <anti-collision-system v-model="formData.accessories.anti_collision_system" />
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        cols="12"
        md="2"
      >
        <sound-system v-model="formData.accessories.sound_system" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <electric-driver-seat v-model="formData.accessories.electric_driver_seat" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <memory-driver-seat v-model="formData.accessories.memory_driver_seat" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <electric-passenger-seat v-model="formData.accessories.electric_passenger_seat" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <memory-passenger-seat v-model="formData.accessories.memory_passenger_seat" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <electric-folding-side-mirrors v-model="formData.accessories.electric_folding_side_mirrors" />
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        cols="12"
        md="2"
      >
        <electric-trunk v-model="formData.accessories.electric_trunk" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <security-packet v-model="formData.accessories.security_packet" />
      </b-col>
      <b-col
        cols="12"
        md="2"
      >
        <two-color v-model="formData.accessories.two_color" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import Sunroof from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/sunroof.vue'
import PanoramaRoof from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/panoramaRoof.vue'
import BlackRoof from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/blackRoof.vue'
import LeatherUpholstery from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/leatherUpholstery.vue'
import VentilatedSeats from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/ventilatedSeats.vue'
import HeatedSeats from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/heatedSeats.vue'
import VacuumDoors from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/vacuumDoors.vue'
import ParkingCamera from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/parkingCamera.vue'
import Camera360 from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/camera360.vue'
import FrontCamera from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/frontCamera.vue'
import FrontParkSensor from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/frontParkSensor.vue'
import RearParkSensor from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/rearParkSensor.vue'
import XenonLights from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/xenonLights.vue'
import LedLights from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/ledLights.vue'
import AdaptiveCruiseControl from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/adaptiveCruiseControl.vue'
import LineAssist from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/lineAssist.vue'
import BlindSpotAlarm from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/blindSpotAlarm.vue'
import AntiCollisionSystem from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/antiCollisionSystem.vue'
import SoundSystem from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/soundSystem.vue'
import ElectricDriverSeat from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/electricDriverSeat.vue'
import MemoryDriverSeat from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/memoryDriverSeat.vue'
import ElectricPassengerSeat from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/electricPassengerSeat.vue'
import MemoryPassengerSeat from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/memoryPassengerSeat.vue'
import ElectricFoldingSideMirrors from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/electricFoldingSideMirrors.vue'
import ElectricTrunk from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/electricTrunk.vue'
import SecurityPacket from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/securityPacket.vue'
import TwoColor from '@/views/Admin/Data/CarEvaluation/elements/AccessoriesElements/twoColor.vue'

export default {
  name: 'AccessoriesForm',
  components: {
    BCard,
    BRow,
    BCol,
    Sunroof,
    PanoramaRoof,
    BlackRoof,
    LeatherUpholstery,
    VentilatedSeats,
    HeatedSeats,
    VacuumDoors,
    ParkingCamera,
    Camera360,
    FrontCamera,
    FrontParkSensor,
    RearParkSensor,
    XenonLights,
    LedLights,
    AdaptiveCruiseControl,
    LineAssist,
    BlindSpotAlarm,
    AntiCollisionSystem,
    SoundSystem,
    ElectricDriverSeat,
    MemoryDriverSeat,
    ElectricPassengerSeat,
    MemoryPassengerSeat,
    ElectricFoldingSideMirrors,
    ElectricTrunk,
    SecurityPacket,
    TwoColor,
  },
  computed: {
    formData: {
      get() {
        return this.$store.getters['carEvaluation/formData']
      },
      set(value) {
        this.$store.commit('carEvaluation/SET_FORM_DATA', value)
      },
    },
  },
}
</script>
