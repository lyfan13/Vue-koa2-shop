<template>
  <div class="detail">
    <NavBar>
      <van-search
        @focus="focus"
        @blur="blur"
        class="search"
        shape="round"
        placeholder="请输入搜索关键词"
        v-model="value"
        @search='search'
      />
    </NavBar>
    <!-- 右上角搜索按钮 -->
    <div
      class="sbtn-wrap"
      v-if="sbtn"
      @mousedown="search"
    >
      <van-button type="info">搜索</van-button>
    </div>

    <van-row class="row">
      <!-- 左侧列表 -->
      <van-tabs
        v-model="activeKey"
        @change="onChange"
      >
        <van-tab
          v-for="item in list"
          :key="item.id"
          :title="`${item.title}`"
        >
          <van-col
            v-for="(item,id) in listItem"
            :key="id"
            :span="8"
          >
            <div @click="itemClick(item.id)"><img
                :src="`${item.imgurl}`"
                class="rightCol-img"
                alt=""
              >
              <div class="rightCol-itemName">{{item.name}}</div>
            </div>
          </van-col>
        </van-tab>
      </van-tabs>
    </van-row>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue';
import { Toast } from 'vant'
export default {
  components: {
    NavBar,
  },
  data () {
    return {
      //搜索value
      value: '',
      activeKey: 0,
      list: [
      ],
      listItem: [],
      sbtn: false
    }
  },
  methods: {
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
    onChange (key) {
      // console.log(this.list)
      this.activeKey = key
      console.log(this.list[key].title)
      this.getitem(this.list[key].title)
      //提交+food
    },
    getList () {
      axios.get('http://129.204.49.171:3000/getdetaillist')
        .then(res => {
          this.list = res.data.data
          this.getitem(this.list[this.activeKey].title)
        })
    },
    getitem (title) {
      axios.get('http://129.204.49.171:3000/getallitem/' + title)
        .then(res => {
          this.listItem = res.data.data
        })
    },
    //导航到buy
    itemClick (id) {
      this.$router.push({ name: 'buy', params: { id } })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.params.id) {
        vm.activeKey = to.params.id
      } else { vm.activeKey = 0 }
    })
  },
  mounted () {
    this.getList()
    this.$store.commit('showBottomBar');
    this.$store.commit('changeActive', 1)

    // this.getitem(this.list[0].title)
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
  height 0.8rem
  padding 0
.detail
  background white
.leftCol-badge
  height 0.4rem
  display flex
  align-items center
  justify-content center
.rightCol-img
  width 100%
  margin-bottom 0.2rem
.rightCol-itemName
  padding 0.2rem
  text-align center
</style>