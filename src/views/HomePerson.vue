<script setup>

</script>
<script>
import  axios  from 'axios'
import { useArticleStore } from '../api/store';
export default {
  async created() {
    const res = await axios.get(
      'http://127.0.0.1:4523/m1/3250941-0-default/person'
    )
    this.username = res.data.username
    this.score = res.data.score
    this.passnum = res.data.passnum
    this.like = res.data.like
    this.concern = res.data.concern
    this.comment = res.data.comment
    this.collect = res.data.collect
    console.log(this.username)
  },
  data() {
    return {
      username: '',
      score:'',
      passnum:'',
      like:'',
      concern:'',
      comment:'',
      collect:''
    }
  }
}
</script>

<template>
  <div class="user">
    <div class="header_function">
      <!-- 头部功能区 -->
      <div class="msg">
        <!-- 水平垂直居中 -->
        <a>
          <img
           
            src="../img/conversation.png"
            style="height: 30px; width: 30px"
          />
        </a>
      </div>
      <div class="scan">
        <a href="#">
          <img src="../img/scan.png" style="height: 30px; width: 30px" />
        </a>
      </div>
    </div>
    <div class="middle">
      <div class="avator">
        <img src="@/img/middle.png" style="height: 70px; width: 70px" />
      </div>
      <div class="middle_information">
        <!-- 制作内凹效果 -->
        <div class="border-inline1"></div>
        <div class="border-inline2"></div>
        <div class="middle_username">{{ username }}</div>
        <div class="user_honor">铂金青年</div>
        <div class="middle_score">积分:{{ score }}</div>
        <!-- 我也不知道啥东西，上面有 -->
        <div class="middle_card">Upass: {{ passnum }}张</div>
      </div>
      <div class="middle_function">
        <div class="middle_function_1">
          <a href="#"><img src="@/assets/img/like(1).png" /></a>
          <p>{{ like }}</p>
          <p>点赞</p>
        </div>
        <div class="middle_function_1">
          <a href="#"><img src="@/assets/img/plus(1).png" /></a>
          <p>{{ concern }}</p>
          <p>关注</p>
        </div>
        <div class="middle_function_1">
          <a href="#"><img src="@/assets/img/coment.png" /></a>
          <p>{{ comment }}</p>
          <p>评论</p>
        </div>
        <div class="middle_function_1">
          <a href="#"><img src="@/img/star.png" /></a>
          <p>{{ collect }}</p>
          <p>收藏</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped lang="less">
.user {
  background-image: url('../assets/img/user-background.jpg');
  background-size: 100vw 812px;
  width: 100vw;
  height: 812px;
}
.header_function {
  width: 100px;
  height: 40px;

  display: flex;
  position: relative;
  left: 280px;
  top: 30px;
}
.msg {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scan {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle {
  width: 340px;
  height: 340px;

  position: relative;
  top: 60px;
  left: 17.5px;
}
.avator {
  width: 70px;
  height: 70px;
  border-radius: 80px;
  overflow: hidden;
  position: absolute;
  left: 135px;
  top: 30px;
  z-index: 1;
}
.middle_information {
  width: 340px;
  height: 272px;
  background-color: azure;
  position: relative;
  top: 68px;
  box-shadow: 0 0 2px 1px #ccc;
  border: 1px solid black;
}
.border-inline1 {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: white;
  left: 130px;
  border-right: 1px solid black; /*我们保留盒子的
			下，右边框*/
  border-bottom: 1px solid black;
  border-radius: 0px 0px 0px 40px; /*设置左下角的圆角
			边框*/
}
.border-inline2 {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 169px;
  border-right: 1px solid black; /*我们保留盒子的
  下，右边框*/

  border-radius: 0px 0px 40px 0px; /*设置左下角的圆角
  边框*/

  background-color: white;
}
.middle_username {
  width: 80px;
  height: 40px;
  font-size: 30px;
  position: absolute;
  top: 40px;
  left: 70px;
}
.user_honor {
  width: 100px;
  height: 40px;
  background-color: cornflowerblue;
  border-radius: 25px;
  position: absolute;
  top: 45px;
  left: 170px;
  text-align: center;
  color: aliceblue;
  line-height: 40px;
}
.middle_score {
  position: absolute;
  top: 90px;
  left: 90px;
}
.middle_card {
  position: absolute;
  top: 90px;
  left: 170px;
}
.middle_function {
  width: 340px;
  height: 140px;

  position: absolute;
  bottom: -10px;
  display: flex;
}
.middle_function a {
  margin: 0 auto;
}
.middle_function img {
  height: 40px;
  width: 40px;
}
.middle_function_1 {
  width: 85px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-items: center;
}
.middle_function_1 p {
  font-size: larger;
  text-align: center;
}
</style>
