<template>
  <div id="calendar">
    <transition name="fade">
      <Calendar />
    </transition>
  </div>
</template>

<script setup>
import Calendar from "../components/Calendar.vue";
import { ref } from "vue";

const today = new Date();
</script>
