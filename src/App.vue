<script setup>
// import MainTabBar from './components/MainTabBar.vue'
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style  scoped lang="less">
*{
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
}
.app{
  width: 100%;
  height: 100%;
 
}
</style>
