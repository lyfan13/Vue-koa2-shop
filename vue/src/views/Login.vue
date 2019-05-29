<template>
  <div>
    <NavBar><span class="nav-title">{{regstatus?'注册':'登录'}}</span></NavBar>
    <div class="blank">
      <!-- login -->
      <div class="wrap">
        <van-cell-group>
          <van-field
            size="large"
            v-model="user.user"
            required
            clearable
            label="用户名"
            placeholder="cheisy"
          />
          <van-field
            size="large"
            v-model="user.password"
            type="password"
            clearable
            label="密码"
            placeholder="123"
            required
          />
        </van-cell-group>
      </div>
      <van-button
        v-if="!regstatus"
        round
        class="btn"
        type="info"
        @click="login"
      >登录</van-button>
      <van-button
        v-if="regstatus"
        round
        class="btn2"
        type="info"
        @click="regist"
      >注册</van-button>

      <div class="reg"><span
          @click="changeLogin"
          class="reg-text"
        >快速{{regstatus?'登录':'注册'}}</span></div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar'
import { Toast } from 'vant'
export default {
  data () {
    return {
      user: {
        user: '',
        password: '',
      },
      regstatus: false
    }
  },
  computed: {
    status () {
      return this.$store.state.loginStatus.token
    }
  },
  components: {
    NavBar,
  },
  methods: {
    changeLogin () {
      this.regstatus = !this.regstatus
    },
    regist () {
      if (!this.user.user || !this.user.password) {
        Toast.fail('请输入用户名和密码')
      } else {
        axios.post("http://129.204.49.171:3000/signin", this.user)
          .then(res => {
              Toast.success('注册成功')
              this.changeLogin()
          })
          .catch(err => {
            Toast.fail('注册失败，用户名已存在或服务器崩溃')
            console.log(err.response)
          })
      }
      console.log('reg')
    },
    login () {
      if (!this.user.user || !this.user.password) {
        Toast.fail('请输入用户名和密码')
      } else {
        axios.post("http://129.204.49.171:3000/login", this.user)
          .then(res => {
              this.$store.commit('login', res.data.data)
              Toast.success('登陆成功！')
              this.getAdr(this.user.user)
              this.$router.push('member')
          })
          .catch(err=>{
              Toast.fail('登陆失败，请检查用户名和密码')
          })
      }
    },
    getAdr (user) {
      // axios.get('http://129.204.49.171:3000/getaddress/'+user)
      //   .then(res=>{
      //     this.$store.commit('getAdr',res.data.data)
      //   })
      this.$store.dispatch('getAdr', user)
    }
  },
  mounted () {
    this.$store.commit('showBottomBar')
  },
}
</script>

<style lang="stylus" scoped>
.nav-title
  font-size 0.35rem
.blank
  background white
  height 100%
  display flex
  background #f5f5f5
  flex-direction column
.wrap
  height 2rem
.btn2
  margin 0.5rem 0.5rem
  font-size 0.4rem
  background linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba)
  border none
.btn
  margin 0.5rem 0.5rem
  font-size 0.4rem
  border none
.reg
  color #999
  text-align right
  padding-right 0.4rem
.reg-text
  display inline-block
  font-size 0.3rem
  height 0.4rem
.text
  font-size 0.5rem
  text-align center
  line-height 2rem
  height 2rem
</style>