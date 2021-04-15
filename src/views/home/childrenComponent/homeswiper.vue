<template>
  <Swiper>
    <SwiperItem v-for="(item, id) in banners" :key="id" >
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  name: "homeswiper",
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>