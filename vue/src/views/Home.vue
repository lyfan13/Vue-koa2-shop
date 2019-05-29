<template>
  <div class="home">

    <!-- <TopBar /> -->
    <div>
      <van-row
        class="search"
        :style="`background-color:${bgcolor}`"
      >
        <van-col
          :span="3"
          class="leftcol"
        >
          <van-icon
            color="white"
            size=".7rem"
            class="icon"
            name="wap-nav"
            @click="jumpto"
          />
        </van-col>
        <van-col :span="18">
          <van-search
            @focus="focus"
            @blur="blur"
            shape="round"
            class="search-input"
            placeholder="请输入搜索关键词"
            :background="bgcolor"
            v-model="value"
            @search='search'
          />
        </van-col>
        <van-col :span="3">
          <div
            class="login"
            @click="login"
          >{{status.token?status.user:'登录'}}</div>
        </van-col>
      </van-row>
    </div>
    <!-- 右上角搜索按钮 -->
    <div
      class="sbtn-wrap"
      v-if="sbtn"
      @mousedown="search"
    >
      <van-button type="info">搜索</van-button>
    </div>
    <!-- <Swiper /> -->
    <div>
      <van-swipe
        :autoplay="3000"
        class="swiper"
      >
        <van-swipe-item
          v-for="(item, index) in swiper"
          :key="index"
          @click="navClick(item.id-1)"
        >
          <img
            v-lazy="`${item.imgurl}`"
            class="swiper-img"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 下面写入分类 -->
    <div class="classify">
      <div
        class="imgWrap"
        v-for="item in navlist"
        :key="item.id"
        @click="navClick(item.id)"
      ><img
          :src="`${item.imgurl}`"
          class="img"
          alt=""
        ><span>{{item.name}}</span></div>

    </div>
    <van-notice-bar
      class="notice"
      text="本网站仅做展示，禁止任何经营性运营"
      mode="link"
    />
    <van-notice-bar
      class="notice"
      text="本网站仅做展示，禁止任何经营性运营"
      mode="link"
    />
    <!-- 秒杀商品 -->
    <div class="recommend">
      <div class="rec-title">秒杀商品</div>
      <div
        class="rec-list"
        v-for="item in seckill"
        :key="item.id"
        @click="itemClick(item.id)"
      ><img
          :src="`${item.imgurl}`"
          class="img"
          alt=""
        >
        <div><span class="price-symbol">￥</span><span class="price">{{item.price}}</span></div>
        <div><span class="price-symbol old">￥</span><span class="price old">{{item.oldprice}}</span></div>
      </div>

    </div>
    <!-- 十元商品 -->
    <div class="ten">
      <img
        src="/assets/common/10.gif"
        class="ad-ten"
      >
    </div>
    <!-- 每日优选 -->
    <div class="today">

      <div class="td-title">今日优选</div>

      <div
        class="td-list"
        v-for="item in listitem"
        :key="item.id"
        @click="itemClick(item.id)"
      ><img
          :src="`${item.imgurl}`"
          class="img"
          alt=""
        >
        <div class="td-item-title">{{item.name}}</div>
        <div><span class="price-symbol">￥</span><span class="price">{{item.price}}</span></div>
      </div>

    </div>

    <!-- TODO -->
    <div class="todo">功能增加中...</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from 'vant'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      swiper: [],
      seckill: [],
      listitem: [],
      navlist: [],
      bgcolor: "transparent",
      value: "",
      sbtn: false
    }
  },
  computed: {
    status () {
      return this.$store.state.loginStatus
    }
  },
  methods: {
    clickSbtn () {
      console.log('sbtn')
    },
    navClick (id) {
      this.$router.push({ name: 'detail', params: { id } })
    },
    getAllItem () {
      axios.get('http://129.204.49.171:3000/gethome')
        .then(res => {
          console.log(res.data)
          this.swiper = res.data.swiper
          this.navlist = res.data.navlist
          this.seckill = res.data.seckill
          this.listitem = res.data.homeitem
        })
    },
    itemClick (id) {
      this.$router.push({ name: 'buy', params: { id } })
    },
    //topbar的方法
    focus () {
      console.log('onfocus')
      this.sbtn = true
    },
    blur () {
      this.sbtn = false
      console.log(this.value)
    },
    search () {
      if (this.value) {
        this.$store.dispatch('getSearch', (this.value))
        this.$router.push({ name: 'search' })
      } else {
        Toast.fail('请输入搜索关键词')
      }
    },
    jumpto () {
      this.$router.push('/detail')
    },
    login () {
      if (!this.status.token) {
        this.$router.push({ name: 'login' })
      } else {
        this.$router.push({ name: 'member' })
      }
    },
    //设置导航条滚动
    handlescroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop == 0 ? this.bgcolor = "transparent" : this.bgcolor = "red"
    }
  },
  mounted () {
    this.getAllItem()
    this.$store.commit('changeActive', 0)
    this.$store.commit('showBottomBar');
    Toast.fail('本网站仅做展示，禁止任何经营性目的')
    window.addEventListener('scroll', this.handlescroll);
  },
}
</script>

<style lang="stylus" scoped>
.sbtn-wrap
  position fixed
  right 0
  top 0
  z-index 55
  height 0.8rem
  overflow hidden
.sbtn
  height 0.8rem
.search
  z-index 5
  position fixed
  width 100%
  display flex
  height 0.8rem
.search-input
  height 0.8rem
.leftcol
  display flex
  align-items center
  padding-left 0.2rem
.login
  color white
  height 0.8rem
  line-height 0.8rem
  font-size 0.3rem
.swiper
  height 3.66rem
  width 100%
.swiper-img
  width 100%
.home
  background-color #f6f6f6
.classify
  width 100%
  display flex
  justify-content space-between
  text-align center
.imgWrap
  width 25%
.img
  width 100%
.notice
  height 0.6rem
  margin 0.15rem 0
.recommend
  background-color white
  text-align center
  display flex
  flex-wrap wrap
  margin-bottom 0.15rem
.rec-title
  text-align start
  padding-bottom 0.2rem
  width 100%
.rec-list
  flex 1
.price-symbol
  font-size 0.2rem
  font-weight bold
  color #e93b3d
.price
  font-weight bold
  color #e93b3d
.old
  color #999
  font-weight normal
  text-decoration line-through
.ad-ten
  width 100%
  margin-bottom 0.15rem
.today
  background-color white
  display flex
  flex-wrap wrap
.td-title
  width 100%
.td-list
  width 33.33%
.todo
  height 2rem
  background-color #f60
  text-align center
</style>
