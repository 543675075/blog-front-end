<template>
  <el-card id="register">
    <el-form ref="form" :model="registForm" label-width="80px" :rules="rules" status-icon>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="registForm.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registForm.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkedPassword">
        <el-input v-model="registForm.checkedPassword" placeholder="再次输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registForm.email" placeholder="请输入邮箱地址"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>



<script>
import { register } from "../network/user";
export default {
  name: "Register",
  components: {},
  data() {
    // 第一次输入密码
    const password = (rule, value, callback) => {
      const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
      if (regPassword.test(value)) return callback;
      callback(
        new Error("8-16个字符，必须包含1个大写字母和1个小写字母和1个数字")
      );
    };
    // 检查与第一次密码是否相同
    const checkPassword2 = (rule, value, callback) => {
      if (value === this.registForm.password) return callback;
      callback(new Error("两次密码输入不同"));
    };
    // 校验邮箱
    const checkedEmail = (rule, value, callback) => {
      const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (regEmail.test(value)) return callback;
      callback(new Error("请输入正确的邮箱"));
    };
    return {
      registForm: {
        nickname: "cyl",
        password: "19891124cYl",
        checkedPassword: "19891124cYl",
        email: "543675075@qq.com"
      },
      rules: {
        nickname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: password, trigger: "blur" }
        ],
        checkedPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: checkPassword2, trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入正确的邮箱地址", trigger: "blur" },
          { validator: checkedEmail, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    
    // 注册
    async onSubmit() {
      const res = await register({ ...this.registForm })
      console.log(res)
      if(res.data.err_code === 1)  return this.$message.error(res.data.msg)
      this.$message.success('注册成功,2秒后跳转到登陆页面')
      setTimeout(()=>{
        this.$router.replace('/login')
      },2000)
    },
    // 重置
    reset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
<style lang='less' scoped>
#register {
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>