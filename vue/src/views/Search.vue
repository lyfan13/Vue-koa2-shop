<template>
  <div>
    <NavBar><span class="nav-title">搜索结果</span></NavBar>
    <div
      class="row"
      v-for="item in result"
      :key="item.id"
      @click="goDetail(item.id)"
    >
      <van-row>
        <van-col :span="3">
          <van-icon
            class="icon"
            name="thumb-circle-o"
          ></van-icon>
        </van-col>
        <van-col :span="18">
          <van-col class="img-wrap">
            <img
              class="img"
              :src="`${item.imgurl}`"
              alt=""
            >
          </van-col>
          <van-col>
            <van-row class="title">{{item.title}}</van-row>
            <van-row class="sp-wrap">
              <van-col class="standard">{{item.standard}}</van-col>
              <van-col class="price">￥{{item.price}}</van-col>
            </van-row>
          </van-col>
        </van-col>
        <van-col :span="3">
          <van-icon
            class="icon"
            name="arrow"
          ></van-icon>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios'
export default {
  components: {
    NavBar,
  },
  data () {
    return {
      name: '',
      // result: []
    }
  },
  computed: {
    result () {
      return this.$store.state.search
    }
  },
  methods: {
    goDetail (id) {
      console.log(id)
      this.$router.push({ name: 'buy', params: { id } })
    }
  },
  mounted () {
    this.$store.commit('hideBottomBar');
  },
  destroyed () {
    this.$store.commit('showBottomBar');
  },
}
</script>

<style lang="stylus" scoped>
.nav-title
  font-size 0.35rem
.row
  background white
  height 2rem
  margin-bottom 0.1rem
  font-size 0.35rem
.img-wrap
  height 2rem
  display border-box
  border 0.01rem dashed yellow
.img
  height 100%
.icon
  font-size 0.5rem
  text-align center
  padding-left 0.2rem
  padding-top 70%
.title
  padding-top 0.3rem
  font-size 0.4rem
  padding-left 0.2rem
.sp-wrap
  padding-top 0.4rem
  padding-left 0.2rem
.price
  color #f44
</style>