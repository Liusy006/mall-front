<template>
<div id="home">
  <NavBar class="home-bar">
    <div slot="middle" class="home">购物街</div>
  </NavBar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommends :recommends="recommends"></home-recommends>
  <feature-view></feature-view>
  <tab-control
      class="tab-control"
      :items="['流行', '新款', '精选']"
      @tabClick="tabClick"
  ></tab-control>
  <goods-list v-if="showGoods.length > 0" :items="showGoods"></goods-list>
  <div v-else>
    <span>no data</span>
  </div>
</div>
</template>

<script>
import NavBar from "components/common/navbar/navbar";
import HomeSwiper from './childrenComponent/homeswiper'
import HomeRecommends from './childrenComponent/homerecommend'
import GoodsList from "components/content/goods/goodslist";
import TabControl from "./childrenComponent/tabcontrol";
import FeatureView from "views/home/childrenComponent/featureview";
import {getMultiData, getHomeData} from "@/network/home";

export default {
name: "home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommends,
    FeatureView,
    TabControl,
    GoodsList
  },
  data(){
    return {
      tabType: 'pop',
      banners:[],
      recommends: [],
      goods: {
        'new': {page: 0, list: []},
        'pop': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  created() {
    this.getMultiData()
    this.getHomeData('pop')
  },
  computed:{
    showGoods() {
      return this.goods[this.tabType].list;
    }
  },
  methods:{
    tabClick(index){
      switch (index){
        case 0:
          this.tabType = 'pop'
          break;
        case 1:
          this.tabType = 'new'
          break;
        case 2:
          this.tabType = 'sell'
          break;
      }
    },
    getMultiData(){
      getMultiData().then(res =>{
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(err =>{
        console.log(err)
      })
    },
    getHomeData(type){
      getHomeData({
        type: type,
        page: 1,
      }).then(res=>{
        console.log(res.list)
        //this.goods[type].list.push(...res.date.list)
        this.goods[type].list.push({
          img: 'https://gw.alicdn.com/tps/i3/2496450278/O1CN01upHTKv1DvMj5spH85_!!2496450278-0-lubanu-s.jpg_Q75.jpg',
          description: 'beautiful clothes',
          price: 99.99,
          likes: 73
        })
        this.goods[type].list.push({
          img: 'https://gw.alicdn.com/tps/i4/1046142621/O1CN01NY3dHt1VEShzlwljD_!!1046142621-0-lubanu-s.jpg_Q75.jpg',
          description: 'hello kitty',
          price: 119.9,
          likes: 99
        })
        this.goods[type].list.push({
          img:'https://gw.alicdn.com/tps/i4/3064911266/O1CN01lrhrF91LDs2TYzfHV_!!3064911266.jpg_Q75.jpg',
          description: 'hahahah',
          price: 229.0,
          likes: 99
        })
        this.goods[type].list.push({
          img:'https://gw.alicdn.com/tps/i0/2393080941/O1CN01Yrwaxb1Ip1Jis9qEq_!!2393080941-0-lubanu-s.jpg_Q75.jpg',
          description: 'hahahah',
          price: 229.0,
          likes: 99
        })
        this.goods[type].list.push({
          img:'https://gw.alicdn.com/tps/i0/2393080941/O1CN01Yrwaxb1Ip1Jis9qEq_!!2393080941-0-lubanu-s.jpg_Q75.jpg',
          description: '配各种上衣都很美 欧货格子阔腿裤女高腰垂感2021新款裤子女夏潮',
          price: 229.0,
          likes: 99
        })
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-bar{
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #ffffff;
}

</style>