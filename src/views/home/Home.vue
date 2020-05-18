<template>
  <div class="home">
    <c-article class="home-article" ref="article" />
    <c-article class="home-article" />
    <c-article class="home-article" />
    <c-article class="home-article" />
    <c-article class="home-article" />
  </div>
</template>



<script>
import cArticle from "components/article.vue";
export default {
  name: "Home",
  components: {
    cArticle
  },
  data() {
    return {};
  },

  mounted(){
    // 获取文章字体数量
    let num = this.$refs.article.$refs.content.innerText
    num = num.slice(0,150)+"..."
    console.log(num)
    this.$refs.article.$refs.content.innerText = num
  }
};
</script>
<style lang='less' scoped>
</style>