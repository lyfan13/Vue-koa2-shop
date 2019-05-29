<template>
  <div>
    <NavBar><span class="nav-title">地址列表</span></NavBar>
    <div v-if="showadr">

      <van-row class="add-adr">
        <van-col :span="2"></van-col>
        <van-col :span="5">名字： </van-col>
        <van-col :span="17">
          <input
            type="text"
            placeholder="张三"
            v-model="name"
          >
        </van-col>
      </van-row>
      <van-row class="add-adr">
        <van-col :span="2"></van-col>
        <van-col :span="5">手机号码： </van-col>
        <van-col :span="17">
          <input
            type="text"
            placeholder="13000000000"
            v-model="tel"
          >
        </van-col>
      </van-row>
      <van-row class="add-adr">
        <van-col :span="2"></van-col>
        <van-col :span="5">地址： </van-col>
        <van-col :span="17">
          <input
            type="text"
            placeholder="广东省"
            v-model="address"
          >
        </van-col>
      </van-row>
    </div>

    <div v-if="!showadr">
      <div
        @click="chooseAdr(item)"
        v-for="item in list"
        :key="item.id"
      >
        <van-row class="address">
          <van-col
            :span="2"
            class="col-left"
          >
            <div class="checkbox">

              <van-checkbox v-model="item.checked"></van-checkbox>
            </div>
          </van-col>
          <van-col
            :span="20"
            class="col-middle"
          >
            <div class="wrap-location">
              <div class="name">{{item.name}},{{item.tel}}</div>
              <div class="location">{{item.address}}</div>

            </div>
          </van-col>
          <van-col
            :span="2"
            class="col-right"
          >
            <div
              class="deleteAdr"
              @click.stop="deleteAdr(item.id)"
            >
              <van-icon name="close"></van-icon>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div
      class="newAdr"
      @click="addAdr"
    >
      {{!showadr?'新增地址':'保存地址'}}
    </div>
    <!-- 悬浮返回按钮 -->
    <div
      class="back"
      v-show="showadr"
      @click="backto"
    >
      <van-icon name="arrow-left"></van-icon>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue';
import axios from 'axios'
import { Toast } from 'vant';
import { Dialog } from 'vant'
export default {
  data () {
    return {
      name: '',
      tel: 1,
      address: '',
      showadr: false
    }
  },
  components: {
    NavBar,
  },
  computed: {
    list () {
      return this.$store.state.address
    },
    user () {
      return this.$store.state.loginStatus.user
    }
  },
  methods: {
    chooseAdr (one) {
      this.$store.commit('chooseAdr', one)
    },
    addAdr () {
      if (this.showadr) {
        if (!this.name || !this.tel || !this.address) {
          Toast.fail('请输入内容')
        } else {
          let data = {
            user: this.user, name: this.name, tel: this.tel, address: this.address, checked: false
          }
          axios.post('http://129.204.49.171:3000/buildaddress', data)
            .then(res => {
              if (res.status == 200) Toast.success('地址提交成功')
              const user = this.user
              this.$store.dispatch('getAdr', user)
              this.showadr = false
              // this.$store.commit('getAdr',user)
            })
        }
      } else { this.showadr = true }
    },
    backto () {
      this.showadr = false
    },
    deleteAdr (id) {
      if (this.$store.state.address[1]) {
        Dialog.confirm({
          message: '是否删除这个地址？'
        }).then(() => {
          // on confirm
          axios.get('http://129.204.49.171:3000/deleteaddress/' + id)
            .then(res => {
              console.log(res)
              if (res.status == 200) Toast.success('删除成功')
              this.$store.dispatch('getAdr', this.user)
            })
        }).catch(() => {
          // on cancel
        });
      } else {
        Toast.fail('要保留一个哦')
      }
    }
  },
  mounted () {
    this.$store.commit('hideBottomBar');
    console.log(this.list)
  },
  destroyed () {
    this.$store.commit('showBottomBar');
  },
}
</script>

<style lang="stylus" scoped>
.address
  background white
  border-bottom 0.01rem solid #f9f9f9
  display flex
  align-items center
.col-left
  padding-left 0.2rem
.col-middle
  padding 0.2rem 0
.name
  margin-bottom 0.1rem
.location
  color #7d7e80
.newAdr
  background red
  width 100%
  color white
  position fixed
  bottom 0
  text-align center
  height 1rem
  line-height 1rem
  font-size 0.3rem
.col-right
  display flex
  justify-content center
.add-adr
  background white
  display flex
  align-items center
  border-bottom 0.01rem dashed #1989fa
  overflow hidden
  height 1rem
.deleteAdr
  font-size 0.4rem
  height 1rem
  line-height 1rem
  width 100%
  text-align center
.back
  position fixed
  background white
  font-size 0.8rem
  display flex
  border-radius 50%
  bottom 30%
  opacity 0.8
</style>