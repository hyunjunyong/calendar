<template>
  <div id="calendar">
    <header>
      <ul>
        <li v-for="(item, index) in menuBtn" :key="index">
          <button :class="{ on: item.on }" @click="menu(index)">
            {{ item.name }}
          </button>
        </li>
      </ul>
    </header>

    <DayCalendar v-show="menuBtn[0].on" v-model="today" />
    <WeekCalendar v-show="menuBtn[1].on" v-model="today" />
    <Calendar v-show="menuBtn[2].on" v-model="today" />
    <YearCalendar v-show="menuBtn[3].on" v-model="today" />
  </div>
</template>

<script setup>
import Calendar from "../components/Calendar.vue";
import DayCalendar from "../components/DayCalendar.vue";
import WeekCalendar from "../components/WeekCalendar.vue";
import YearCalendar from "../components/YearCalendar.vue";

import { ref } from "vue";

const today = ref(new Date());
let menuBtn = ref([
  { name: "DAY", on: false },
  { name: "WEEK", on: false },
  { name: "MONTH", on: true },
  { name: "YEAR", on: false },
]);

const menu = (i) => {
  menuBtn.value.map((item) => {
    item.on = false;
  });

  menuBtn.value[i].on = true;
};
</script>

<style scoped></style>
