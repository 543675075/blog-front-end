<template>
  <el-card id="login">
    <el-form ref="form" :model="loginForm" label-width="80px" :rules='rules' status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" show-password>
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>



<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' }
          ]
      },
    };
  },
  methods: {
    // 登陆
    onSubmit(){
      this.$refs.form.validate(res=>{
        if (!res) {
          return 
        }

      })
      
    },
    // 重置
    reset(){
       this.$refs.form.resetFields()
    }
  },
};
</script>
<style lang='less' scoped>
#login {
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>