<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
.nav-bar{
  height: 44px;
  line-height: 44px;
  display: flex;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  text-align: center;
}
.left, .right{
  width: 60px;
}

.middle{
  flex: 1;
}

</style>