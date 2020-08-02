<template>
  <div id="app">
    <!-- 顶部 -->
    <dingbu/>
    <!-- 路由 --> 
    <router-view/>
  </div>
</template>

<script>

import dingbu from './components/dingbu'

export default {
  components:{
      dingbu
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  body{
    width: 100%;
    background: rgb(255,255,255);
  }
  #app{
    width: 100%;
  }
</style>
