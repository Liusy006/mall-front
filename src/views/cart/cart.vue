<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "cart",
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.scroll = new BScroll(this.$refs.wrapper, {
        // probeType: 3,
        // pullUpLoad: true
      })
    })

  }
}
</script>

<style scoped>
  .wrapper{
    height: 200px;
    background-color: #1f2d3d;
    overflow: hidden;
  }
</style>