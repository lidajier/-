<script setup>
import '../login/loginPage.css'
import { reactive, ref } from "vue"
import { User, Lock, Key, Picture, Loading } from "@element-plus/icons-vue"
import  { useUserStore }  from '../login/userlogin'
/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref("")

const form = reactive({
  username: '',
  password:'',
  date1: '',
  date2: '',
  delivery: false,
  type: []
  resource: '',
  desc: '',
})
// /** 登录表单校验规则 */
// const loginFormRules=() => {
//   username: [{ required: true, message: "请输入用户名" }];
//   password: [
//     { required: true, message: "请输入密码" },
//     { min: 8, max: 16, message: "长度在 8 到 16 个字符"}
//   ];
//   code: [{ required: true, message: "请输入验证码"}]
// }
/** 登录逻辑 */
const handleLogin = () => {
  from.value?.validate((valid=boolean, fields) => {
    if (valid) {
      loading.value = true
      useUserStore()
        .login(form)
        .then(() => {
          router.push({ path: "/" })
        })
        .catch(() => {
          createCode()
          form.password = ""
        })
        .finally(() => {
          loading.value = false
        })
    } else {
      console.error("表单校验不通过", fields)
    }
  })
}

// /** 创建验证码   还没开始验证码*/
// const createCode = () => {
//   // 先清空验证码的输入
//   form.code = ""
//   // 获取验证码
//   codeUrl.value = ""
//   getLoginCodeApi().then((res) => {
//     codeUrl.value = res.data
//   })
// }

// /** 初始化验证码 */
// createCode()
</script>
<template>
  <div class="zong">
    <!-- 最上面的盒子 -->
    <div class="first">
      <div class="header">
        <img src="@/img/noun-close-102781.png" class="close_1" />
        <div class="forget">
          <a href="@/components/forget.html" class="forget_a">忘记密码？</a>
        </div>
      </div>
    </div>
    <!-- 中间的盒子 -->
    <div class="middle">
      <div class="middle_img">
        <img src="@/img/middle.png" alt="" />
      </div>
      <form id="loginForm">
        <div class="text">
          <img
            src="@/img/noun-phone-5888371.png"
            width="16px"
            height="16px"
          />

          <el-form :model="form" label-width="20px" ref="loginFormRef" v-model="form"  @keyup.enter="handleLogin">
            <el-form-item prop="username">
              <el-input v-model.trim="form.username"
               placeholder="用户名"
               type="text"
               tabindex="1"
               :prefix-icon="User"
              size="large"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model.trim="form.password"
               placeholder="密码" 
               type="password"
               tabindex="2"
               :prefix-icon="Lock"
               size="large"
              show-password
               />
            </el-form-item>
            <el-form-item>
              <el-button > </el-button>
            </el-form-item>
          </el-form>
         
          
          <!-- <input type="text" placeholder="您的手机号" class="txt" />
          <hr />
        </div>

        <div class="password">
          <img src="@/img/noun-lock-1327591.png" width="16px" height="16px" />
          <input type="password" placeholder="密码" class="psw" />
         -->
              </div>
        <div class="btn">
          <button type="submit" @click="login">登录</button>
        </div>
      </form>

      <!-- 立即注册 -->
      <div class="login">
        <a href="@/components/login.html">立即注册</a>
      </div>
    </div>
    <!-- 最下面的登陆界面 -->
    <div class="footer">
      <div class="left">
        <img
          src="@/img/cib-tencent-qq.svg"
          href="https://www.baidu.com/baidu?ie=utf-8&wd=qq"
        />

        <p>QQ登录</p>
      </div>
      <div class="right">
        <a href="http://www.runoob.com/html/html-tutorial.html">
          <img src="@/img/cib-wechat.svg" />
        </a>
        <p>微信登录</p>
      </div>
    </div>
  </div>
</template>
<!-- <style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}


.zong {
  background-image: url(src/img/bgi.jpg);
  width: 375px;
  height: 667px;
  background-color: #faf8f0;
  margin: 0 auto;
  border-color: aqua;
}
.first {
  width: 375px;
  height: 100px;
  /* background-color: blue; */
}
.close_1 {
  width: 28px;
  height: 28px;
  margin-top: 30px;
  margin-left: 30px;
  float: left;
}
.forget {
  margin-top: 30px;
  float: right;
}
.forget_a {
  text-decoration: none;
  color: blue;
}
.middle {
  width: 375px;
  height: 300px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.middle_img {
  width: 105px;
  height: 105px;
  margin: 0 auto;
}
.middle_img img {
  width: 100%;
}
.middle .text input {
  box-sizing: border-box;

  font-size: 14px;
  height: 35px;
  width: 300px;

  border: none;

  outline: none;
  padding: 0 10px;
  letter-spacing: 1px;
}
.middle .password input {
  box-sizing: border-box;

  font-size: 14px;
  height: 35px;
  width: 300px;

  border: none;
  outline: none;
  padding: 0 10px;
  letter-spacing: 1px;
}
.btn {
  color: white;
  width: 300px;
  margin: 15px auto;

  cursor: pointer;
}
.btn button {
  width: 100%;
  height: 40px;
  border-radius: 30px;
  background-color: aquamarine;
}
.btn button:hover {
  border-color: antiquewhite;
}

.login {
  width: 100%;
  height: 60px;
}
.login a {
  width: 100px;
  height: 40px;
  display: block;
  margin: 80px auto;
  text-align: center;
  text-decoration: none;
  font-size: 19px;
}
.login a:hover {
  color: aquamarine;
  border-color: aquamarine;
  border-radius: 15px;
}
.footer {
  width: 100%;
  height: 150px;
  margin: 100px auto;
}
.left {
  margin-left: 20%;
  width: 100px;
  display: inline-block;
  margin-right: 10%;
}
.left img {
  width: 60px;
  height: 60px;
}
.right {
  margin-right: auto;
  width: 100px;
  display: inline-block;
}
.right img {
  width: 60px;
  height: 60px;
}
</style> -->
