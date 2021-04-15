<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item, id) in recommends" :key="id">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homerecommend",
  props:{
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 16px 0 20px;
  border-bottom: 8px solid #eee;

}

.recommend-item {
  flex: 1;
}

.home-recommend img {
  width: 65px;
  height: 65px;
  margin: 10px;
}

</style>