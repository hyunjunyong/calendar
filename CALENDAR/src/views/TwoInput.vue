<template>
  <div id="name">
    <input
      v-model="startDate"
      type="text"
      readonly
      @click="isCalendar = !isCalendar"
    />
    ~
    <input
      v-model="endDate"
      type="text"
      readonly
      @click="isCalendar = !isCalendar"
    />
    <CalendarPicker
      v-show="isCalendar"
      v-model:startDate="startDate"
      v-model:endDate="endDate"
      @update:startDate="(val) => (startDate = val)"
      @update:endDate="(val) => (endDate = val)"
    />
  </div>
</template>

<script setup>
import CalendarPicker from "../components/CalendarPicker.vue";
import { ref } from "vue";

let startDate = ref(new Date());
let endDate = ref(new Date());
let isCalendar = ref(false);
</script>

<style lang="scss" scoped></style>
