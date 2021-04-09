<template>
  <div class="tab-bar-item" @click="itemClick" >
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else name="icon-active"></slot>
    <div :style="curStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "tabbaritem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    curStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }

  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }

}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img{
  height: 24px;
  width: 24px;
}

.active{
  color: red;
}
</style>