<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "components/content/tabbar/tabbar";
export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
