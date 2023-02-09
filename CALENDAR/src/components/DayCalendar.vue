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
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

let day = ref(props.modelValue?.getDate());
const prevDay = () => {};
const nextDay = () => {};
</script>

<style lang="scss" scoped></style>
