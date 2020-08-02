<template>
  <div class="home">
    <!-- 列表 -->
    <list/>
  </div>
</template>

<script>
import list from '../components/list'

export default {
  name: 'Home',
  components: { 
    list
  }
}
</script>

<style lang='scss' scoped>
  .home{
    width: 100%;
  }
</style>
