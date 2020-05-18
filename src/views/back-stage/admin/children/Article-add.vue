<template>
  <div class="rich-text">
    <el-form :model="articleForm" ref="ruleForm" label-width="100px">
      <el-form-item label="文章标题" >
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章标签" >
        <el-input v-model="articleForm.tag"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" >
        <el-input v-model="articleForm.category"></el-input>
      </el-form-item>
      <el-form-item label="文章作者">
        <el-input v-model="articleForm.author" disabled></el-input>
      </el-form-item>
    </el-form>
    <mavon-editor style="height: 100%;width: 100%;" v-model="articleForm.content"></mavon-editor>
    <el-button type="primary" class="publish" @click="commit">去去去去吧</el-button>
  </div>
</template>



<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { publish } from "network/back-stage.js";
export default {
  name: "ArticleAdd",
  components: {
    mavonEditor
  },
  data() {
    return {
      // 富文本内容
      articleForm: {
        title: '',
        tag: '',
        category: '',
        author: '',
        content: ''
      }
    };
  },
  methods: {
    async commit() {
      const result = await publish( { ...this.articleForm } );
    }
  }
};
</script>
<style lang='less' scoped>
.rich-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  .publish {
    margin-top: 20px;
  }
}
</style>