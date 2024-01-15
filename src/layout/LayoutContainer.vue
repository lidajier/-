<script setup>
// import MainTabBar from '@/components/MainTabBar.vue'
import TopBarItem from '../components/TabBarItem.vue'
//tab  top
</script>

<template>
  <div class="box">
    <router-view></router-view>

    <div class="footer">
      <TopBarItem path="/homepage" activeColor="purple">
        <template #itemIcon>
          <img src="@/assets/img/home.png" alt=""
        /></template>
        <template #itemIconActive>
          <img src="@/assets/img/home-active.png" alt=""
        /></template>
        <template #itemText><span>首页</span> </template>
      </TopBarItem>
      <TopBarItem path="/menu" activeColor="purple">
        <template #itemIcon>
          <img src="@/assets/img/clipboard.png" alt=""
        /></template>
        <template #itemIconActive>
          <img src="@/assets/img/clipboard.png" alt="" />
        </template>

        <template #itemText><span>列表</span> </template>
      </TopBarItem>
      <TopBarItem path="/right" activeColor="purple">
        <template #itemIcon>
          <img src="@/assets/img/crown-.png" alt=""
        /></template>
        <template #itemIconActive>
          <img src="@/assets/img/crown-active.png" alt="" />
        </template>

        <template #itemText><span>权益</span> </template>
      </TopBarItem>
      <TopBarItem path="/person" activeColor="purple">
        <template #itemIcon>
          <img src="@/assets/img/user.png" alt=""
        /></template>
        <template #itemIconActive>
          <img src="@/assets/img/user-active.png" alt="" />
        </template>

        <template #itemText><span>我的</span> </template>
      </TopBarItem>
    </div>
  </div> 
</template>
<style scoped lang="less">
*{
  padding: 0;
  margin: 0;
}
.box {
  width: 375px;
  height: 812px;
  background-color: azure;
  position: relative;
  /*top: 50px;
  left: 50px;*/
}

.footer {
  bottom: -10px;
  width: 375px;
  height: 90px;
  position: fixed;
  display: flex;
  background-color: aliceblue;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>
<!-- background-color:aliceblue; -->