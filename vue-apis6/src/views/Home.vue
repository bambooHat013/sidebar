<template>
  <div class="container">
    <div class="header"><Header /></div>
    <div class="home-page">
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.header {
  display: block;
  width: 100%;
}

.home-page {
  display: block;
}
</style>
