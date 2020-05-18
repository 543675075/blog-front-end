<template>
  <div id="app">
    <cyl-header></cyl-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import cylHeader from 'components/header.vue'
  export default {
    name: 'App',
    components: {
      cylHeader
    }
  }
</script>
<style lang="less">
  #app{
    width: 100%;
    height: 100%;
  }
</style>
