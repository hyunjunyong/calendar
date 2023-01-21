<script setup>
import { ref } from "vue";
let currentDate = ref();
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
const lastDay = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
);
let weekDays = [
  { name: "일", class: "txt-red" },
  { name: "월", class: "" },
  { name: "화", class: "" },
  { name: "수", class: "" },
  { name: "목", class: "" },
  { name: "금", class: "" },
  { name: "토", class: "txt-blue" },
];
</script>

<template>
  <div id="calendar">
    <div id="cal-wrap">
      <div class="inner">
        <thead class="weekdays">
          <th v-for="i in weekDays" :key="i" :class="i.class">{{ i.name }}</th>
        </thead>
      </div>
    </div>
  </div>
</template>
