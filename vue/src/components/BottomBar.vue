<template>
  <div
    v-if="hidden"
    class="bottomBar"
  >
    <router-link tag="div" :to="{name:'home'}"  @click="changeBottomBarActive(0)" class="tabbar" :class="`${active==0?'active':''}`">
      <div class="icon">
        <van-icon
          size="large"
          name="home-o"
        />
      </div>
      <div class="text">首页</div>
    </router-link>
    <router-link tag="div" :to="{name:'detail'}"  @click="changeBottomBarActive(1)" class="tabbar" :class="`${active==1?'active':''}`">
      <div class="icon">
        <van-icon
          size="large"
          name="apps-o"
        />
      </div>
      <div class="text">列表</div>
    </router-link>
    <router-link tag="div" :to="{name:'cart'}"  @click="changeBottomBarActive(2)" class="tabbar" :class="`${active==2?'active':''}`">
      <div class="icon">
        <van-icon
          size="large"
          name="cart-o"
          :info="array.length"
        />
      </div>
      <div class="text">购物车</div>
    </router-link>
    <router-link tag="div" :to="{name:'member'}"  @click="changeBottomBarActive(3)" class="tabbar" :class="`${active==3?'active':''}`">
      <div class="icon">
        <van-icon
          size="large"
          name="user-circle-o"
        />
      </div>
      <div class="text">会员中心</div>
    </router-link>

  </div>
</template>

<script>
export default {
  computed: {
    active () {
      return this.$store.state.bottomBarActive
    },
    array () {
      return this.$store.state.cart
    },
    hidden () {
      return this.$store.state.bottomBarHidden
    },
  },
  methods: {
    changeBottomBarActive (id) {
      this.$store.commit('changeActive',id)
    }
  },
}
</script>

<style lang="stylus" scoped>
.bottomBar
  position fixed
  bottom 0
  display flex
  background white
  align-items center
  justify-content space-between
  width 100%
  z-index 99
.tabbar
  font-size 0.3rem
  height 1rem
  width 25%
  display flex
  text-align center
  flex-direction column
  align-items center
  justify-content center
.icon
  padding-bottom 0.1rem
.active
  color #f60
</style>