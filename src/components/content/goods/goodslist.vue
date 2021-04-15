<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in items" :item="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./goodslistitem";
export default {
  name: "goodslist",
  props:{
    items: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>