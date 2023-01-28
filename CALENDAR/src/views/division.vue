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
    <transition name="fade">
      <Calendar v-model="today" />
    </transition>
  </div>
</template>

<script setup>
import Calendar from "../components/Calendar.vue";
import { ref } from "vue";

const today = new Date();
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
