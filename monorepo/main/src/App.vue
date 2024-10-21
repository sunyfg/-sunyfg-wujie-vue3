<template>
  <div>
    <h1>主应用</h1>

    <WujieVue
      :props="{ name: 'vue3', age: 24 }"
      name="vue3"
      url="http://localhost:5175/"
    ></WujieVue>
    <WujieVue name="react" url="http://localhost:5174/"></WujieVue>
  </div>
</template>

<script setup lang="ts">
import { bus } from "wujie";

bus.$on("vue3", (data) => {
  console.log("主应用：", data);
});
</script>

<style scoped></style>
