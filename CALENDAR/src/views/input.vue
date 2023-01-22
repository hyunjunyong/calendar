<template>
  <div id="name">
    <input
      v-model="date"
      type="text"
      readonly
      @click="isCalendar = !isCalendar"
    />
    <Calendar
      v-show="isCalendar"
      :model-value="date"
      @update:modelValue="(val) => (date = val)"
    />
  </div>
</template>

<script setup>
import Calendar from "../components/Calendar.vue";
import { ref } from "vue";

let date = ref(new Date());
let isCalendar = ref(false);
</script>

<style lang="scss" scoped></style>
