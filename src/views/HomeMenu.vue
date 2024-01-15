<template>
  <div class="app">

    <div class="sidebar">
      <div class="logo">
        <img src="@/assets/img/logo.png">
        <h1>后台系统</h1>
      </div>

      <div class="menu">
        <router-link to="/users">用户管理</router-link>
        <router-link to="/contents">内容管理</router-link>
        <router-link to="/orders">订单管理</router-link>
      </div>
    </div>

    <div class="main">
      <div class="header">
        <div class="user">
          <img :src="user.avatar" class="avatar">
          <div>{{user.name}}</div>
        </div>
      </div>
      
      <div class="content">
        <router-view></router-view>
      </div>
      
      <div class="footer">
        &copy; 2021 版权所有
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Admin',
        avatar: './avatar.png'
      }
    }
  }
}  
</script>

<style scoped lang="less">
/* 通用样式 */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: #333;
  text-decoration: none;
}

/* 侧边栏 */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  background: #fff;
  border-right: 1px solid #eee;
}

 .logo{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img{
  width: 10px;
  height: 10px;
}
 h1 {
  margin: 0 0 0 10px;
}

.menu {
  margin-top: 20px;  
}

.menu a {
  display: block;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}

.menu a.active {
  background: #409eff;
  color: #fff;
}

/* 主内容区 */ 
.main {
  margin-left: 200px;
}

.header {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  border-bottom: 1px solid #eee;
}

.content {
  padding: 20px;
}

.footer {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee; 
}
</style>