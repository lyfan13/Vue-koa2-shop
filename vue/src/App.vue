<template>
  <div id="app">
    <router-view />
    <keep-alive>
      <BottomBar />
    </keep-alive>
  </div>
</template>
<script>
import BottomBar from '@/components/BottomBar.vue'
export default {
  components: {
    BottomBar
  },
}
</script>

<style lang="stylus">
</style>
