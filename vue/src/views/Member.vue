<template>
  <div>
    <NavBar><span class="nav-title">会员中心</span></NavBar>
    <div class="self">
      <!-- imgurl应该写死 -->
      <div
        class="img-wrap"
        style="background-image:url('https://img.116s.com/2015-06/26/14353272110001.jpg')"
      >
      </div>
      <div>
        <span class="phone">{{status.user}}</span>
      </div>
    </div>
    <div class="btn">
      <van-button
        plain
        size="small"
        @click="logout"
        type="primary"
      >退出登录</van-button>
    </div>
    <div class="all">
        <div class="all-title">待付款商品</div>
      <div
        class="selected"
        v-for="(item,id) in selectedItem"
        :key="id"
      >
        <div class="item-wrap">
          <div class="abs-img">

            <img
              class="img"
              :src="`${item.imgurl}`"
              alt=""
            >
          </div>
        </div>
        <div class="col">

          <div class="text">{{item.title}}</div>
          <div class="row">

            <div class="standard">{{item.standard}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </div>

        <div class="count">x{{item.count}}</div>
      </div>
      <div class="think">
        <van-button
          size="small"
          plain
          round
          type="primary"
          @click="toCart"
        >编辑</van-button>
        <van-button
          size="small"
          round
          type="danger"
          @click="toSubmit"
        >结算</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { Toast } from 'vant'
export default {
  components: {
    NavBar,
  },
  computed: {
    status () {
      return this.$store.state.loginStatus
    },
    selectedItem () {
      return this.$store.state.cart.filter(item => item.checked == true)
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
      Toast.success('成功退出')
      this.$router.push({ name: 'login' })
    },
    toCart(){
      this.$router.push({name:'cart'})
    },
    toSubmit(){
      this.$router.push({name:'submit'})
    }
  },
  mounted () {
    this.$store.commit('changeActive', 3)
    this.$store.commit('showBottomBar')
    console.log(this.selectedItem)
  },
}
</script>

<style lang="stylus" scoped>
.nav-title
  font-size 0.35rem
.self
  background linear-gradient(90deg, #70d467 0, #6fbbfa)
  height 3rem
  display flex
  justify-content center
  align-items center
.img-wrap
  border-radius 50%
  background-position center
  background-size cover
  width 1.5rem
  height 1.5rem
  margin-right 0.2rem
  border 0.01rem solid white
.phone
  font-size 0.45rem
  color white
.btn
  position fixed
  right 0
  top 2.94rem
.all
  background transparent
.all-title
  line-height .5rem
  height .5rem
  background white
  font-weight 700
  border 1px solid #f9f9f9
.selected
  margin-bottom 0.15rem
  height 1rem
  background white
  display flex
  align-items center
  font-size 0.3rem
  padding 0 0.5rem
.abs-img
  height 1.1rem
  box-shadow 0.03rem 0.03rem 0.1rem #888888
.img
  height 100%
.col
  padding-left 0.5rem
  display flex
  flex-direction column
.text
  margin-bottom 0.2rem
  padding-top .2rem
.row
  display flex
.standard
  color #7d7e80
  font-size 0.25rem
  margin-bottom 0.2rem
.price
  color #f44
  font-size 0.25rem
.count
  position absolute
  right 0.5rem
  font-style italic
.think
  display flex
  justify-content  flex-end
  margin-top .2rem
</style>