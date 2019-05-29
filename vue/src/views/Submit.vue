<template>
  <div>
    <NavBar><span class="nav-title">确认订单</span></NavBar>
    <!-- 收货地址栏 -->
    <div @click="changeAdr" >
      <van-row class="address" v-if="list[0]">
        <van-col
          :span="2"
          class="left-icon"
        >
          <van-icon name="location-o"></van-icon>
        </van-col>
        <van-col
          :span="13"
          class="middle-wrap"
        >
          <van-row class="name">收货人：{{list[0].name}}</van-row>
          <van-row class="adr">收货地址：{{list[0].address}}</van-row>
        </van-col>
        <van-col
          :span="7"
          class="middle-phone"
        >{{list[0].tel}}</van-col>
        <van-col
          :span="2"
          class="right-icon"
        >
          <van-icon name="arrow"></van-icon>
        </van-col>
      </van-row>
      <van-row class="address" v-if="!list[0]">
        <div class="pl">请点击设置地址</div>
      </van-row>
    </div>
    <!-- 商品展示栏 -->
    <van-row class="show">
      <van-col
        class="show-icon"
        :span="2"
      >
        <van-icon name="shop-collect-o"></van-icon>
      </van-col>
      <van-col :span="20">选中的商品</van-col>
    </van-row>
    <!-- 选中的商品 -->
    <van-row
      class="checked"
      v-for="(item,id) in selectedItem"
      :key="id"
    >
      <van-col :span="1"></van-col>
      <van-col
        :span="4"
        class="img-wrap"
      ><img
          class="show-img"
          :src="`${item.imgurl}`"
        ></van-col>
      <van-col
        :span="17"
        class="title-wrap"
      >
        <van-row class="title">{{item.title}}</van-row>
        <van-row>
          <van-col class="standard">{{item.standard}}</van-col>
          <van-col class="price">￥{{item.price}}</van-col>
        </van-row>
      </van-col>
      <van-col
        :span="2"
        class="count-wrap"
      >x{{item.count}}</van-col>
    </van-row>
    <!-- 优惠券 -->
    <van-row class="discount">
      <van-col
        class="discount-text"
        :span="18"
      >优惠券</van-col>
      <van-col :span="4">使用优惠</van-col>
      <van-col :span="2">
        <van-icon name="arrow"></van-icon>
      </van-col>
    </van-row>
    <!-- 配送方式与留言 -->
    <van-row class="discount">
      <van-col
        :span="18"
        class="discount-text"
      >配送方式</van-col>
      <van-col
        :span="6"
        class="express"
      >快递：免运费</van-col>
    </van-row>
    <van-row class="discount">
      <van-col
        :span="6"
        class="discount-text"
      >买家留言</van-col>
      <van-col :span="18">
        <input
          type="text"
          v-model="boardtext"
          class="board"
          placeholder="建议留言前与卖家沟通"
        >
      </van-col>
    </van-row>

    <!-- 支付方式 -->
    <div class="pay" v-show="showpay">
      <div class="pay-wrap left-wrap" @click="alipay">
        <div class="pay-icon">
          <van-icon
            size="large"
            name="alipay"
          ></van-icon>
        </div>
        <div class="pay-text">
          支付宝支付
        </div>
      </div>
      <div class="pay-wrap right-wrap" @click="wechatpay">
        <div class="pay-icon">
          <van-icon
            size="large"
            name="wechat"
          ></van-icon>
        </div>
        <div class="pay-text">
          微信支付
        </div>
      </div>
    </div>
    <!-- 底部提交栏 -->
    <van-submit-bar
      button-text="结算"
      @submit="onSubmit"
      class="bottom"
    >
      <div><span class="bottom-count">合计：</span><span class="bottom-price">￥ {{totalprice}}</span></div>
    </van-submit-bar>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { Toast } from 'vant';
export default {
  components: {
    NavBar,
  },
  data () {
    return {
      boardtext: '',
      totalprice: 0.01,
      showpay:false
    }
  },
  computed: {
    list () {
      return this.$store.state.address.filter(item => item.checked)
    },
    selectedItem () {
      return this.$store.state.cart.filter(item => item.checked == true)
    }
  },
  methods: {
    onSubmit () {
      if (!this.selectedItem[0]) {
        Toast.fail('请先添加商品')
      }else{
        console.log('jiesuan')
        this.showpay = !this.showpay
      }
    },
    changeAdr () {
      this.$router.push({ name: 'address' })
    },
    alipay(){
      Toast.fail('支付宝结算未开通')
      console.log('alipay')
    },
    wechatpay(){
      Toast.fail('微信结算未开通')
      console.log('wechatpay')
    }
  },
  mounted () {
    console.log(this.selectedItem)
    this.$store.commit('hideBottomBar');
  },
  destroyed () {
    this.$store.commit('showBottomBar');
  },
}
</script>

<style lang="stylus" scoped>
.bottom-price
  font-size 0.3rem
  color red
.bottom-count
  padding-left 2rem
.address
  background white
  height 1.5rem
  border-bottom 0.01rem dashed #f60
  padding-bottom 0.1rem
.pl
  font-size .5rem
  line-height 1.5rem
  text-align center
.name
  font-weight 600
  padding-top 0.2rem
  padding-bottom 0.1rem
.adr
  color #7d7e80
.middle-phone
  padding-top 0.2rem
  font-weight 600
.left-icon
  text-align center
  line-height 1.5rem
.right-icon
  line-height 1.5rem
.show
  background white
  height 0.7rem
  line-height 0.7rem
  margin-top 0.2rem
.show-icon
  text-align center
  padding-top 0.04rem
.checked
  width 100%
  height 1rem
  background white
  display flex
  align-items center
  justify-content center
.img-wrap
  height 1rem
.show-img
  height 100%
.title
  margin-bottom 0.1rem
.standard
  color #7d7e80
.price
  padding-left 0.1rem
  color #f44
.count-wrap
  font-style italic
.discount
  background white
  height 0.7rem
  line-height 0.7rem
  margin-top 0.05rem
  overflow hidden
.discount-text
  padding-left 0.2rem
.board
  font-size 0.25rem
  line-height 0.7rem
.pay
  display flex
  justify-content center
  position fixed
  bottom 1.2rem
  right 0
  box-shadow -.1rem .1rem .1rem #888
.pay-wrap
  display flex
  align-items center
  flex-direction column
  background white
  padding .3rem
.left-wrap
  border-top-left-radius:.2rem;
  border-bottom-left-radius:.2rem;  
  border-right .01rem dashed #f60
.right-wrap
  border-top-right-radius:.2rem;
  border-bottom-right-radius:.2rem;
</style>