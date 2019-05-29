import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
    key: 'sundayvuex'
  })],
  state: {
    bottomBarActive: 0,
    bottomBarHidden: true,
    cart: [],
    loginStatus: {},
    address: [],
    search: []
  },
  mutations: {
    changeActive (state, id) {
      state.bottomBarActive = id
    },
    hideBottomBar (state) {
      state.bottomBarHidden = false
    },
    showBottomBar (state) {
      state.bottomBarHidden = true
    },
    addToCart (state, data) {
      //过滤存在过的数据
      state.cart = state.cart.filter(item => item.name !== data.name)
      // 添加数据
      state.cart.push(data)
      // state.cart = array
    },
    EditCart (state, array) {
      state.cart = array
    },
    changeOneCheck (state, id) {
      state.cart.forEach(item => {
        if (item.id == id) item.checked = !item.checked
      });
    },
    checkAll (state, checked) {
      state.cart.forEach(item => {
        item.checked = checked
      });
    },
    deleteItem (state) {
      state.cart = state.cart.filter(item => item.checked == false)
    },
    login (state, user) {
      state.loginStatus = user
    },
    getAdr (state, data) {
      state.address = data
      if (state.address[0]) state.address[0].checked = true
    },
    logout (state) {
      state.loginStatus = {}
    },
    chooseAdr (state, one) {
      state.address.forEach(item => {
        item.id == one.id ? item.checked = true : item.checked = false
      });
    },
    getSearch (state, data) {
      state.search = data
    }
  },
  actions: {
    changeActive ({ commit }, id) {
      commit('changeActive', id)
    },
    changeHidden ({ commit }) {
      commit('changeHidden')
    },
    getAdr ({ commit }, user) {
      axios.get('http://129.204.49.171:3000/getaddress/' + user)
        .then(res => {
          commit('getAdr', res.data.data)
        })
    },
    getSearch ({ commit }, name) {
      axios.post('http://129.204.49.171:3000/search', {name})
        .then(res => {
          console.log(res.data.data)
          commit('getSearch',res.data.data)
        })
    }
  }
})
