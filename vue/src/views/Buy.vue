<template>
  <div>
    <!-- 导航栏 -->

    <NavBar>
      <div>{{itemData.name}}</div>
    </NavBar>
    <!-- 商品详情 -->
    <!-- 轮播图 -->
    <van-swipe
      :autoplay="3000"
      indicator-color="#f60"
    >
      <van-swipe-item
        v-for="(id,index) in list"
        :key="index"
      ><img
          class="img"
          :src="`${changeImgurl}${id}.jpg`"
          alt=""
        ></van-swipe-item>
    </van-swipe>
    <!-- 中间介绍 -->
    <div class="intro">
      <van-col><span class="price-symbol">￥</span><span class="price">{{itemData.price}}</span></van-col>
      <van-col class="share">
        <van-row>
          <van-icon
            name="share"
            size=".4rem"
            class="share-icon"
          ></van-icon>
        </van-row>
        <van-row class="share-text">分享</van-row>

      </van-col>
    </div>
    <van-row class="stock">

      <van-col :span="8">运费:免运费</van-col>
      <van-col
        :span="8"
        class="stock-left"
      >剩余:{{itemData.stock}}</van-col>
      <van-col
        :span="8"
        class="stock-sales"
      >销量:{{itemData.sales}}</van-col>

    </van-row>

    <!-- 商品详情 -->
    <van-tabs class="itemIntro">
      <van-tab title="商品详情">
        <div class="leftIntro">{{itemData.title}}</div>
      </van-tab>
      <van-tab title="本店成交">本店成交</van-tab>
    </van-tabs>

    <!-- 底部栏 -->
    <van-goods-action class="goods-action">
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        :info="array.length"
        @click="toCart"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="showAddToCart"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="buyNow"
      />
    </van-goods-action>

    <!-- 购买栏 -->
    <div
      class="showbuy"
      v-show="showbuy"
    >
      <div
        class="mask"
        @click="closeBuy"
      >
      </div>
      <div class="shop">
        <van-row class="shopTitle">
          <van-col
            :span="6"
            class="shopTitle-imgWrap"
          >
            <div class="shopTitle-img">
              <img
                :src="`${itemData.imgurl}`"
                alt=""
                class="shopTitle-img"
              >
            </div>
          </van-col>
          <van-col
            :span="16"
            class="shopTitle-text"
          >
            <van-row>{{itemData.name}}</van-row>
            <van-row class="shopTitle-price">￥{{itemData.price}}</van-row>
          </van-col>
          <van-col :span="2">
            <van-icon
              class="shopTitle-icon"
              name="close"
              size=".4rem"
              @click="closeBuy"
            />
          </van-col>
        </van-row>
        <van-row class="shopSize">
          <van-row class="shopSize-up">规格：</van-row>
          <van-row><span
              class="shopSize-type"
              @click="activeThis"
              :class="[activeId === 1?active:'']"
            >{{itemData.standard}}</span></van-row>
        </van-row>
        <van-row class="shopCount">
          <van-col :span="16">
            <van-row>购买数量</van-row>
            <van-row class="shopCount-count">剩余{{itemData.stock}}件</van-row>
          </van-col>
          <van-col :span="8">
            <van-stepper v-model="value" />
          </van-col>
        </van-row>

        <van-row
          class="nextStep"
        >
          <div
            class="nsText"
            @click="addToCart"
          >{{!BuyOrCart?'确认加入':'下一步'}}</div>
        </van-row>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
import NavBar from '@/components/NavBar'
export default {

  name: 'Buy',
  components: {
    NavBar,
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6],
      itemTitle: "shupian",
      value: 1,
      activeId: 0,
      showbuy: false,
      BuyOrCart: false,
      active: 'active',
      id: "",
      itemData: {},
      changeImgurl:''
    }
  },
  computed: {
    array () {
      return this.$store.state.cart
    },
  },

  methods: {
    //导航栏
    leftClick () {
      this.$router.go(-1)
    },
    activeThis () {
      this.activeId = 1
    },
    closeBuy () {
      this.showbuy = false
    },
    //底部栏
    toCart () {
      this.$router.push({ name: 'cart' })
    },
    showAddToCart () {
      this.showbuy = true
      this.BuyOrCart = false
    },
    //比较函数：是否添加过
    compare (currentValue) {
      return currentValue.id == this.itemData.id
    },
    addToCart () {
      //重新更新数量
      console.log('添加到购物车')
      this.itemData.count = this.value
      this.$store.commit("addToCart", this.itemData)
      if(!this.BuyOrCart){
        Toast.success('成功添加！');
      }else{
        this.$router.push({name:'cart'})
      }
    },
    buyNow () {
      this.showbuy = true
      this.BuyOrCart = true
    },
    getData (id) {
      axios.get('http://129.204.49.171:3000/getone/' + id)
        .then(res => {
          this.itemData = res.data.data
          this.changeImgurl = this.itemData.imgurl.substr(0,24)
          // console.log(this.itemData.imgurl.substr(0,24))
          console.log(this.itemData.imgurl)
        })
    }
  },
  //网址变化后重新获取商品数据
  beforeRouteUpdate (to, from, next) {
    next(this.getData(to.params.id))
  },
  //第一次挂载后获取数据
  mounted () {
    this.$store.commit('hideBottomBar');
    this.getData(this.$route.params.id)
  },
  destroyed () {
    this.$store.commit('showBottomBar');
  },
}
</script>

<style lang="stylus" scoped>
.active
  background red
  color white
  border-color red !important
.img
  width 100%
  margin 0 auto
.navbar
  background-color #F5F5F5
  position fixed
  z-index 2
  top 0.2rem
  left 0.2rem
  border-radius 50%
  width 0.6rem
  height 0.6rem
  text-align center
.share
  text-align center
.share-icon
  color #f50
.share-text
  font-size 0.2rem
.text
  color black
  font-size 0.4rem
  height 1rem
.intro
  padding 0 0.3rem
  height 1rem
  border-bottom 0.01rem solid #f5f5f5
  display flex
  justify-content space-between
  background white
  align-items center
.price-symbol
  color #e4393c
.price
  font-size 0.4rem
  color #e4393c
  font-weight 700
.stock
  height 0.8rem
  display flex
  align-items center
  justify-content center
  color #999
  padding 0 0.15rem
  background-color #fff
.stock-left
  text-align center
.stock-sales
  text-align right
.itemIntro
  height 5rem
  margin-top 0.2rem
.leftIntro
  color red
  font-size 0.5rem
.mask
  background-color black
  opacity 0.7
  position fixed
  height 100%
  width 100%
  z-index 999
  top 0
.shop
  position fixed
  bottom 0
  width 100%
  background #fff
  z-index 1000
.nextStep
  display flex
  font-size 0.4rem
  height 0.9rem
  color white
  text-align center
  background #f44
  justify-content center
  align-items center
  margin-top 0.1rem
.nsText
  border 1px solid red
  width 100%
  height 100%
  line-height 0.9rem
.shopTitle
  height 1.7rem
  padding 0 0 0 0.2rem
  border-bottom 1px solid #f5f5f5
.shopTitle-text
  margin 0.2rem 0
  font-size 0.35rem
  padding-left 0.2rem
.shopTitle-imgWrap
  position relative
.shopTitle-img
  position absolute
  top -0.1rem
.shopTitle-img
  width 100%
.shopTitle-icon
  margin 0.2rem 0
  color #969799
.shopTitle-price
  color red
  font-size 0.35rem
  margin-top 0.2rem
.shopSize
  border-bottom 1px solid #f5f5f5
  padding-left 0.2rem
  padding-top 0.2rem
  height 1.1rem
.shopSize-type
  border 1px solid gray
  border-radius 0.1rem
  padding 0.05rem 0.15rem
.shopSize-up
  margin-bottom 0.25rem
.shopCount
  border-bottom 1px solid #f5f5f5
  padding-left 0.2rem
  padding-top 0.2rem
  height 1rem
.shopCount-count
  margin-top 0.2rem
  color #969799
.goods-action
  z-index 999
</style>