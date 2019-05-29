<template>
  <div>
    <!-- 导航栏 -->
    <NavBar>
      <span class="nav-title">购物车</span>
    </NavBar>
    <!-- 编辑图标 -->
    <div
      class="edit"
      @click="changeEdit"
    >{{edit?"完成":"编辑"}}</div>
    <!-- 商品列表 -->
    <div
      v-show="!array[0]"
      class="empty"
      @click="toShop"
    >快去添加商品吧~</div>
    <van-row
      class="card"
      v-for="(item,index) in array"
      :key="index"
      v-show="array[0]"
    >
      <div
        class="colwrap"
        @click="changeOneCheck(item)"
      >
        <van-col :span="2">
          <!-- 商品的check -->
          <van-checkbox v-model="item.checked"></van-checkbox>
        </van-col>
        <van-col :span="20">
          <van-card
            class="card-card"
            :price="`${item.price}`"
            :desc="`${item.standard}`"
            :thumb="`${item.imgurl}`"
          >
            <div
              v-show="edit"
              slot="title"
              class="stepper-wrap"
              @click.stop=""
            >
              <van-stepper
                v-model="item.count"
                class="stepper"
                disable-input=""
              />
            </div>
            <div
              v-show="!edit"
              slot="title"
              class="card-title"
            >
              {{item.title}}
            </div>
          </van-card>
        </van-col>
        <van-col :span="2"><span>x</span><span class="count">{{item.count}}</span></van-col>
      </div>
    </van-row>

    <!-- 提交订单 -->
    <van-row>
      <van-submit-bar
        :button-text="`${edit?'删除':'提交订单'}`"
        @submit="onSubmit"
        class="bottom"
      >
        <!-- 所有的check -->
        <van-checkbox
          @click="changeAllCheck"
          v-model="checked"
          class="bottom-check"
        >全选</van-checkbox>
        <div><span class="bottom-count">合计：</span><span class="bottom-price">￥ {{totalPrice}}</span></div>
      </van-submit-bar>
    </van-row>
  </div>
</template>

<script>
import { Toast } from 'vant'
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data () {
    return {
      value: '',
      edit: false,
      checked: false,
      priceArr: [0],
    }
  },
  computed: {
    array () {
      return this.$store.state.cart
    },
    totalPrice () {
      //先清空，不然会重新叠加
      this.priceArr = [0]
      if (this.array[0]) {
        this.array.forEach(item => {
          if (item.checked) this.priceArr.push(item.price * item.count)
        });
        return this.priceArr.reduce((a, b) => a + b)
      } else return 0
    },
  },
  methods: {
    changeAllCheck () {
      this.checked = !this.checked
      this.$store.commit('checkAll', this.checked)
    },
    backTo () {
      this.$router.go(-1)
    },
    toShop(){
      this.$router.push({name:'detail'})
      console.log('clicktoshop')
    },
    changeEdit () {
      if (!this.array[0]) {
        Toast.fail('请先添加商品')
      } else {
        this.edit = !this.edit
        if (!this.edit) {
          console.log('xiugai')
          this.$store.commit('EditCart', this.array)
          Toast.success('修改成功')
        }
      }
    },
    //改变单个的选中状态
    changeOneCheck (item) {
      this.$store.commit('changeOneCheck', item.id)
    },
    compare (item) {
      return item.checked == true
    },
    onSubmit () {
      if (this.edit) {
        //删除状态
        this.$store.commit('deleteItem')
      } else {
        // 提交状态
        console.log('点击了提交订单')
        if(!this.$store.state.loginStatus.token){
          Toast.fail('请先登录')
          this.$router.push({name:'login'})
        }else{
          this.$router.push({name:'submit'})
        }
      }
    },
  },
  mounted () {
    //挂载时检查一下全局状态
    this.array.every(this.compare) ? this.checked = true : this.checked = false
    this.$store.commit('changeActive', 2)
    //隐藏bottomBar
    this.$store.commit('hideBottomBar');
    //获取local购物车信息
  },
  updated () {
    if (this.array.length == 0) {
      this.checked = false
    } else {
      this.array.every(this.compare) ? this.checked = true : this.checked = false
    }
  },
  destroyed () {
    //显示bottomBar
    this.$store.commit('showBottomBar');
  },
}
</script>

<style lang="stylus" scoped>
.edit
  position fixed
  right 0
  top 0
  height 0.8rem
  line-height 0.8rem
  text-align center
  background #f60
  width 1rem
  color white
.empty
  font-size 0.5rem
  text-decoration underline
  color #ff7700
  font-style italic
  padding 2rem 0
  text-align center
  background blue
  z-index 9999
.stepper-wrap
  height 0.7rem
.card-title
  display inline-block
  font-size .38rem
  height 0.7rem
  line-height 0.7rem
.card
  background white
  display flex
  align-items center
  justify-content center
  padding-left 0.3rem
  margin-top 0.1rem
.card-card
  background white
  display flex
.count
  font-style italic
  font-size 0.38rem
  font-weight 700
.nav-title
  font-size 0.35rem
.bottom-check
  padding-left 0.3rem
.bottom-price
  font-size 0.3rem
  color red
.bottom-count
  padding-left 1rem
.colwrap
  width 100%
  display flex
  justify-content center
  align-items center
  padding-right 0.3rem
  
</style>