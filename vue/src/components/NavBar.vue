<template>
  <van-row class="nav">
    <van-col :span="3">
      <van-icon
        @click="goBack"
        name="arrow-left"
      />
    </van-col>
    <van-col :span="18">
      <slot></slot>
    </van-col>
    <van-col :span="3">
      <van-icon name="ellipsis" @click="changeHidden"/>
    </van-col>
    <div class="hidden" v-if="hidden">
      <router-link tag="div" :to="{name:'home'}" class="hidden-item"><van-icon name="home-o geli" /><span>首页</span></router-link>
      <router-link tag="div" :to="{name:'detail'}" class="hidden-item"><van-icon name="apps-o geli" /><span>分类</span></router-link>
      <router-link tag="div" :to="{name:'cart'}" class="hidden-item"><van-icon name="cart-o geli" /><span>购物车</span></router-link>
      <router-link tag="div" :to="{name:'member'}" class="hidden-item"><van-icon name="user-circle-o geli" /><span>我的</span></router-link>
    </div>
  </van-row>
</template>

<script>
export default {
  data() {
    return {
      hidden: false
    }
  },
  methods: {
    changeHidden(){
      this.hidden = !this.hidden
    },
    goBack () {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" scoped>
.nav
  overflow hidden
  display flex
  text-align center
  height 0.8rem
  justify-content center
  align-items center
  border-bottom 1px solid #f5f5f5
  font-size 0.4rem
  background white
.hidden
  background rgba(0,0,0,0.9)
  width 2.2rem
  color white
  display flex
  flex-direction column
  position fixed
  top .9rem
  right .1rem
  font-size .4rem
  align-items flex-start
  border-radius .1rem
  z-index 999
.hidden-item
  display flex
  width 100%
  padding-top .2rem
  padding-bottom .2rem
  padding-left .2rem
.geli
  margin-right .1rem
</style>