<template>
  <div class="admin">
    <el-container>
      <el-header class="header">
        <h2>Cyl的博客管理系统</h2>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="tip">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏 -->
          <el-menu default-active="2" unique-opened router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户</span>
              </template>
              <el-menu-item>用户管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>文章</span>
              </template>
              <el-menu-item index="/backStage/article">文章管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {
    handleCommand(command){
      this[command]()
    },
    // 注销
    logout() {
      // 删除token
      sessionStorage.clear();
      this.$router.replace("/login");
    },
    // 暂未开发
    tip(){
      this.$message('暂未开发')
    }
  }
};
</script>
<style lang='less' scoped>
.admin {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #fff;
}
.el-container {
  width: 100%;
  height: 100%;
}
// 顶部
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mainColor);
  color: #fff;
  h2 {
    color: #222;
    margin: 0;
  }
  .el-dropdown {
    cursor: pointer;
  }
}
// 左边栏
.el-aside {
  height: 100%;
}
</style>