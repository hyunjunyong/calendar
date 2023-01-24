<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header style="padding-bottom: 50px">
    <router-link to="/"> basic calendar </router-link>
    <router-link to="/input"> input 예제 </router-link>
    <router-link to="/TwoInput"> two input 예제 </router-link>
    <router-link to="/Division"> division 예제 </router-link>
  </header>
  <RouterView />
</template>

<style scoped></style>
