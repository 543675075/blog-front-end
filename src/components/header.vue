<template>
  <header class="header">
    <div class="container">
      <!-- 标题 -->
      <div class="site-meta" @click="$router.push('/home')">
        <div class="hidden">
          <span class="top"></span>
        </div>
        <span class="title">Chen Yan Lin</span>
        <div class="hidden">
          <span class="bottom"></span>
        </div>
      </div>
      <!-- 导航 -->
      <nav class="nav" ref="nav" v-show="isShow">
        <!-- 菜单栏 -->
        <ul class="nav-list">
          <li class="nav-item" v-for="item in navList" :key="item.path" @click="go(item.path)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon" />
            </svg>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </nav>
      <!-- 小屏汉堡功能按钮 -->
      <div class="hamburger-btn" @click="unfold">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>



<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      // 导航数据
      navList: [
        {
          name: "首页",
          icon: "#icon-shouye",
          path: "/home"
        },
        {
          name: "关于",
          icon: "#icon-yonghu",
          path: "/about"
        },
        {
          name: "分类",
          icon: "#icon-leimupinleifenleileibie2",
          path: "/categoty"
        },
        {
          name: "归档",
          icon: "#icon-dangan",
          path: "/archive"
        },
        {
          name: "标签",
          icon: "#icon-biaoqian",
          path: "/tag"
        },
        {
          name: "留言板",
          icon: "#icon-liuyan",
          path: "/guestbook"
        },
        {
          name: "作品",
          icon: "#icon-xiangmu",
          path: "/project"
        },
        {
          name: "更多",
          icon: "#icon-gengduomore12",
          path: "/more"
        }
      ],
      // 监听视口宽
      innerWidth: window.innerWidth,
      // 小屏幕是否显示导航
      isShow: false
    };
  },


  computed: {
    // 导航功能按钮显示/隐藏
    // isShow(){
    //   if(window.innerWidth>767) return true
    //   return false
    // }
  },


  created() {
  },
  
  mounted(){
    window.onresize = ()=>{
      return this.innerWidth = window.innerWidth
    }
  },

  watch: {
    // 监听视口宽度
    innerWidth:{
      immediate: true,
      handler: function(newValue) {
        if( newValue>767 ) return this.isShow = true
        return this.isShow = false
      }
    }
  },



  methods: {
    // 点击跳转到各页面
    go(path) {
      if (this.$route.path === path) return;
      this.$router.push(path);
    },


    // 小屏幕功能按钮展开
    unfold(){
      this.isShow = !this.isShow
    }
  }
};
</script>




<style lang='less' scoped>
.header {
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px 0;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // 标题
  .site-meta {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    .hidden {
      width: 75%;
      height: 2px;
      margin: 0 auto;
      overflow: hidden;
    }
    .top,
    .bottom {
      width: 100%;
      height: 100%;
      display: block;
      background-color: #222;
    }
    .top {
      animation: left 1s;
      -webkit-animation: left 1s;
    }
    .title {
      display: block;
      font-size: 22px;
      color: #222;
      font-weight: bold;
      animation: move 0.5s;
      -webkit-animation: move 2s;
    }
    .bottom {
      animation: right 1s;
      -webkit-animation: right 1s;
    }
  }
  //导航条
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-list {
      display: flex;
      .nav-item {
        padding: 0 10px;
        background: transparent;
        border-radius: 5px;
        transition: all 0.3s;
        &:hover {
          background: #e1e1e1;
        }
        cursor: pointer;
        span {
          font-size: 13px;
          margin-left: 5px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .header {
    position: relative;
    padding: 10px 0;
    .container{
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .hidden {
      display: none;
    }
    // 导航条
    .nav {
      // display: none;
      position: absolute;
      top: 55px;
      left: -10px;
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 50px;
      padding: 10px 20px;
      background-color: #f5f5f5;
      border-top: 1px solid #ccc;
      .nav-list {
        flex-direction: column;
        padding: 0;
      }
    }
    // 汉堡功能按钮
    .hamburger-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 10px;
      width: 42px;
      height: 32px;
      box-sizing: border-box;
      cursor: pointer;
      span {
        display: block;
        background-color: #222;
        width: 100%;
        height: 2px;
      }
    }
  }
}
</style>