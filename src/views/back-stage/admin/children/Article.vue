<template>
  <div class="main">
    <el-button type="primary" @click="articleAdd">赶紧写</el-button>
  </div>
</template>



<script>

export default {
  name: "Article",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    articleAdd(){
      this.$router.push('/backStage/articleAdd')
    }
  }
};
</script>
<style lang='less' scoped>
</style>