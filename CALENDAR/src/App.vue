<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <router-link to="/"> basic calendar </router-link>
    <router-link to="/input"> input 예제 </router-link>
    <router-link to="path" />
  </header>
  <RouterView />
</template>

<style scoped></style>
