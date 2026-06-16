<template>
  <b-card title="Araç Kondisyonu">
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <front-bonnet-damage v-model="formData.condition.front_bonnet.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <left-front-fender-damage v-model="formData.condition.left_front_fender.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <left-front-door-damage v-model="formData.condition.left_front_door.damage_type" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <left-rear-door-damage v-model="formData.condition.left_rear_door.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <roof-damage v-model="formData.condition.roof.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <trunk-damage v-model="formData.condition.trunk.damage_type" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <right-rear-fender-damage v-model="formData.condition.right_rear_fender.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <right-rear-door-damage v-model="formData.condition.right_rear_door.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <right-front-door-damage v-model="formData.condition.right_front_door.damage_type" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <right-front-fender-damage v-model="formData.condition.right_front_fender.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <front-bumper-damage v-model="formData.condition.front_bumper.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <rear-bumper-damage v-model="formData.condition.rear_bumper.damage_type" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        md="4"
      >
        <left-rocker-board-damage v-model="formData.condition.left_rocker_board.damage_type" />
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <right-rocker-board-damage v-model="formData.condition.right_rocker_board.damage_type" />
      </b-col>
      <b-col>
        <left-rear-fender-damage v-model="formData.condition.left_rear_fender.damage_type" />
      </b-col>
    </b-row>

  </b-card>
</template>

<script>
import { BCard, BRow, BCol } from 'bootstrap-vue'
import FrontBonnetDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/frontBonnet.vue'
import LeftFrontFenderDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/leftFrontFender.vue'
import LeftFrontDoorDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/leftFrontDoor.vue'
import LeftRearDoorDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/leftRearDoor.vue'
import RoofDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/roof.vue'
import TrunkDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/trunk.vue'
import RightRearFenderDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/rightRearFender.vue'
import RightRearDoorDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/rightRearDoor.vue'
import RightFrontDoorDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/rightFrontDoor.vue'
import RightFrontFenderDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/rightFrontFender.vue'
import FrontBumperDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/frontBumper.vue'
import RearBumperDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/rearBumper.vue'
import LeftRockerBoardDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/leftRockerBoard.vue'
import RightRockerBoardDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/rightRockerBoard.vue'
import LeftRearFenderDamage from '@/views/Admin/Data/CarEvaluation/elements/ConditionElements/leftRearFender.vue'

export default {
  name: 'ConditionForm',
  components: {
    BCard,
    BRow,
    BCol,
    FrontBonnetDamage,
    LeftFrontFenderDamage,
    LeftFrontDoorDamage,
    LeftRearDoorDamage,
    RoofDamage,
    TrunkDamage,
    RightRearFenderDamage,
    RightRearDoorDamage,
    RightFrontDoorDamage,
    RightFrontFenderDamage,
    FrontBumperDamage,
    RearBumperDamage,
    LeftRockerBoardDamage,
    RightRockerBoardDamage,
    LeftRearFenderDamage,
  },
  props: {
    value: Object,
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
