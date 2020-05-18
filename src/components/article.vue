<template>
  <article class="article container">
    <h2 class="title">这是我的个人博客</h2>
    <span class="content" ref="content">
      MongoDB关系型和非关系型数据库1.关系型数据库（表就是关系，或者说表与表之间存在关系） 所有关系型数据库都是通过sql语言来操作 所有的关系型数据库在操作之前都需要设计表结构 数据表必须唯一的，主键，默认值，非空 2.非关系型数据库 非关系型数据库非常灵活 有的非关系数据库就是键值对 但是M ...MongoDB关系型和非关系型数据库1.关系型数据库（表就是关系，或者说表与表之间存在关系） 所有关系型数据库都是通过sql语言来操作 所有的关系型数据库在操作之前都需要设计表结构 数据表必须唯一的，主键，默认值，非空 2.非关系型数据库 非关系型数据库非常灵活 有的非关系数据库就是键值对 但是M ...MongoDB关系型和非关系型数据库1.关系型数据库（表就是关系，或者说表与表之间存在关系） 所有关系型数据库都是通过sql语言来操作 所有的关系型数据库在操作之前都需要设计表结构 数据表必须唯一的，主键，默认值，非空 2.非关系型数据库 非关系型数据库非常灵活 有的非关系数据库就是键值对 但是M ...MongoDB关系型和非关系型数据库1.关系型数据库（表就是关系，或者说表与表之间存在关系） 所有关系型数据库都是通过sql语言来操作 所有的关系型数据库在操作之前都需要设计表结构 数据表必须唯一的，主键，默认值，非空 2.非关系型数据库 非关系型数据库非常灵活 有的非关系数据库就是键值对 但是M ...
    </span>
  <a href="/about">阅读全文</a>
  </article>
</template>



<script>
export default {
  name: "cArticle",
  components: {},
  data() {
    return {};
  },

  mounted() {}
};
</script>
<style lang='less' scoped>
.article {
  height: 337px;
  margin-top: 80px;
  padding: 25px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px #ccc;
  .title {
    display: inline-block;
    font-size: 26px;
    color: #555;
    cursor: pointer;
    &:hover::after {
      width: 100%;
    }
    &::after {
      display: block;
      content: "";
      width: 0;
      height: 2px;
      background-color: #333;
      margin: 0 auto;
      transition: all .5s;
    }
  }
  .content {
    display: block;
    font-size: 16px;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
  }
}


</style>