<template>
  <div class="app">
    <!-- SIDEBAR -->
    <Sidebar />
    <!-- 右側二級路由 -->
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<style lang="scss">
//顏色控制
:root{
  --primary: #4ed9ff;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: var(--light);
}

button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app{
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  main{
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
