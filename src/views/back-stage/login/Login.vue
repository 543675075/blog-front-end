<template>
  <el-card id="login">
    <el-form ref="form" :model="loginForm" label-width="80px" :rules='rules' status-icon>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" >
        <el-input v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>



<script>
import { login } from 'network/back-stage.js'
export default {
  name: "Login",
  components: {},
  data() {
    // 校验邮箱
    const checkedEmail = (rule, value, callback) => {
      const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (regEmail.test(value)) return callback();
      callback(new Error("请输入正确的邮箱地址"));
    };
    return {
      loginForm: {
        email: "",
        password: ""
      },
      rules: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { validator: checkedEmail , trigger: 'blur'}
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
      this.$refs.form.validate(async (res,obj)=>{
        if (!res) return 
        // 发送登陆请求
        const result = await login({ ...this.loginForm })
        // console.log(result);
        if(result.data.err_code != 0) return this.$message.error(result.data.msg)
        // 登陆成功
        // 先保存token
        sessionStorage.setItem('token' , result.data.token)
        // 跳转到管理后台
        this.$router.replace('/admin')
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