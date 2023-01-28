<template>
  <div id="name">
    <header>
      <div class="cal-header">
        <button @click="prevDay()">&lt;</button>
        <span>{{ day }}</span>
        <button @click="nextDay()">></button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, props } from "vue";

const today = ref(new Date());
let day = ref(today.value.getDate());
const prevDay = () => {};
const nextDay = () => {};
</script>

<style lang="scss" scoped></style>
