
<script setup>
import { ref,computed, reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const  Sign=()=>{
     //  路径/home对应我在router目录下index.js中定义的path属性值
         router.push({path:'/sign'});
         console.log(11);
      }
const finshTask=computed(()=>{
   state.exp.value+=20
   console.log(12);
})
const  Search=()=>{
        router.push({path:'/'})
        
}
// 关于提升你的等级那点东西。
const state =reactive({
level:1,
exp:24,
expRequired:100
})
const gainExp=(amount)=>{
  state.exp+=amount
    if (state.exp >= state.expRequired) {
      levelUp() 
    }
}
const  levelUp= computed(()=>{
  level.value+=1
})

const  expPercent=computed(()=>{
    return state.exp.value / state.expRequired.value * 100
  })
</script>

<template>
  <div class="allPage">
    <!-- 总的详情页 -->
    <div class="gradeTitle">
      <!-- 标题 -->
      <p>会员成长等级</p>
    </div>

    <div class="persondetail">
      <div class="level-top">
          Lv.{{ state.level }}
        </div>
      <div class="container">
        
        <div class="circle"></div>
      </div>
      <!-- 个人的一些基础信息 -->
      <div class="avator">
        <!-- 头像 -->
        <img src="../img/middle.png" style="height: 50px; weight: 50px" />
      </div>
      <div class="username">姓名</div>
      <div class="leftvalue">
        <div class="leftvalueNum">{{ 1540 }}</div>
        <div class="leftvalueWord">成长值</div>
      </div>
      <div class="rightdays">
        <div class="rightdaysNum">{{ 18 }}</div>
        <div class="rightdaysWord">成长值/天</div>
      </div>
    </div>
    <div class="personRightCard">
      <!-- 个人权益信息 -->
      <div class="level_right">
        <div class="level">
          Lv. {{ state.level }}
        </div>
        <div class="right">
            享三项权益
        </div>
       <div class="progess_bar">
      当前经验值  ，升级还需要
      <el-progress :percentage="expPercent"></el-progress>
       </div>
      </div>
      
    </div>
    <div class="rightCard">
      <!-- 权益基础信息 -->
      <div class="gradeMsg">Lv{{ state.level }} 尊享权益</div>
      <div class="rightFunction">
        <!-- 权益界面的功能 -->
        <div class="shareCard">
          <!-- 分享卡功能 -->
          <div class="functionWord">分享卡</div>
          <img
            src="@/assets/img/social-media-marketing.png"
            @click="shareCard"
          />
        </div>
        <div class="birthdayGift">
          <!-- 生日礼包功能 -->
          <div class="functionWord">生日礼包</div>
          <img src="@/assets/img/cake.png" />
        </div>
        <div class="gradeGift">
          <!-- 等级勋章功能 -->
          <div class="functionWord">等级勋章</div>
          <img src="@/assets/img/medal.png" />
        </div>
      </div>
      <div class="rightTask">
        <!-- 权益界面可以做的任务 -->
        <div class="taskSign">
          <div class="sign">每日签到</div>
          <div class="word">随机获得1-20成长值</div>
          <div class="btn">
            <button @click="Sign">去完成</button>
          </div>
        </div>

        <div class="taskShare">
          <div class="share">分享</div>
          <div class="word">随机获得1-20成长值</div>
          <div class="btn">
            <button @click="finshTask">去完成</button>
          </div>
        </div>
        <div class="taskSearch">
          <div class="searchFunction">搜索</div>
          <div class="word">随机获得1-20成长值</div>
          <div class="btn">
            <button @click="Search">去完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.allPage {
  /*总体页面*/
  width: 375px;
  height: 812px;
  position: relative;
  background-image: url("../img/会员bgc(1).jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.gradeTitle {
  position: absolute;
  width: 150px;
  left: 35vw;
  top: 4px;
  font-size: 20px;
  color: aliceblue;
}
.container {
  margin-left: -45vw;
  margin-top: -5vw;
  width: 150vw;
  height: 150vw;
}
.level-top{
  width: 30px;
  height: 30px;
  top: -10vw;
  left: 30vw;
  position: absolute;
}
.circle {
  width: 150vw;
  height: 150vw;
  border: 8px solid rgba(63, 63, 68, 1);
  border-radius: 50%;
}
.persondetail {
  /*个人详情部分*/
  position: absolute;
  left: 70px;
  top: 20vw;
  width: 235px;
  height: 40vw;
  color: aliceblue;
}
.avator {
  /* 此处可以传递头像数据并渲染*/
  position: absolute;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  left: 97.5px;
  top: 15px;
  overflow: hidden;
}
.username {
  position: absolute;
  left: 100px;
  top: 80px;
  font-size: 6vw;
}
.leftvalue {
  position: relative;
  left: 0px;
  top: 100px;
  width: 60px;
  height: 50px;
}
.leftvalueNum {
  position: absolute;
  width: 36px;
  height: 16px;
  left: 20%;
}
.leftvalueWord {
  position: absolute;
  width: 36px;
  height: 24px;
  font-size: 12px;
  left: 20%;
  bottom: -1px;
}
.rightdays {
  position: relative;
  left: 175px;
  top: 50px;
  width: 60px;
  height: 50px;
}
.rightdaysNum {
  position: absolute;
  width: 36px;
  height: 16px;
  left: 40%;
}
.rightdaysWord {
  position: absolute;
  width: 60px;
  height: 24px;
  font-size: 12px;
  bottom: -1px;
}
.personRightCard {
  width: 90vw;
  height: 40vw;
  margin: 0 auto;
  margin-top: 70vw; /*  这里的图案等后面再开始补充 */
  background: linear-gradient(to right,rgba(243, 221, 206, 1),rgba(212, 157, 128, 1));
}
.level_right{
color: rgba(138, 79, 47, 1);
margin-left: 3vw;
}
.level{
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
    }
.progess_bar{
    margin-top:4vw ;
    height: 50px;
    
}
.rightCard {
  position: relative;
  width: 100vw;
  height: 110vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.gradeMsg {
  margin-left: 5vw;
  color: rgba(62, 122, 233, 1);
  font-size: 5vw;
  margin-bottom: 3vw;
  margin-top: 3vw;
}
.rightFunction {
  width: 100vw;
  height: 30vw;
  display: flex;
  justify-content: space-around;

  margin-bottom: 5vw;
}
.functionWord {
  color: rgba(62, 122, 233, 1);

  font-size: 4vw;
  padding-top: 2vw;
  margin-left: 6vw;
}

.shareCard {
  width: 28vw;
  height: 31vw;
  background-color: rgba(228, 186, 161, 1);
  display: flex;
  flex-direction: column;
}
.shareCard img {
  width: 25vw;
  height: 24vw;
  margin-left: 2vw;
}
.birthdayGift {
  width: 28vw;
  height: 31vw;
  background-color: rgba(228, 186, 161, 1);
}
.birthdayGift img {
  width: 25vw;
  height: 25vw;
  margin-left: 2vw;
}
.gradeGift {
  width: 28vw;
  height: 31vw;
  background-color: rgba(228, 186, 161, 1);
}
.gradeGift img {
  width: 25vw;
  height: 24vw;
  margin-left: 2vw;
}
.rightTask {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 94vw;
  height: 70vw;
  overflow: auto;
  margin: 0 auto;
  color: rgba(62, 122, 233, 1);
  font-size: small;
}
.rightTask .word {
  
  margin-left: 5vw;
}
.taskSign {
  width: 90vw;
  height: 17vw;
  line-height: 10vw;
  display: flex;
  border-radius: 4px;
  border: rgba(245, 245, 245, 1) 4px solid;
  flex-direction: column;
}
.taskSign .sign {
  width: 20vw;
  height: 5vw;
  margin-left: 5vw;
  font-size: large;
}
.taskSign .btn button {
  position: relative;
  width: 20vw;
  background-color: rgba(34, 214, 158, 1);
  height: 10vw;
  top: -12vw;
  left: 65vw;
  border: none;
  border-radius: 20vw;
  color: #fff;
}
.taskShare {
  width: 90vw;
  height: 17vw;
  line-height: 10vw;
  border-radius: 4px;
  border: rgba(245, 245, 245, 1) 4px solid;
}
.taskShare .share {
  width: 20vw;
  height: 5vw;
  font-size: large;
  margin-left: 5vw;
}
.taskShare .btn button {
  position: relative;
  width: 20vw;
  background-color: rgba(34, 214, 158, 1);
  height: 10vw;
  top: -12vw;
  left: 65vw;
  border: none;
  border-radius: 20vw;
  color: #fff;
}
.taskSearch {
  width: 90vw;
  height: 17vw;
  line-height: 10vw;
  border-radius: 4px;
  border: rgba(245, 245, 245, 1) 4px solid;
  overflow: visible;
}

.taskSearch .searchFunction {
  width: 20vw;
  height: 5vw;
  margin-left: 5vw;
  font-size: large;
}
.taskSearch .btn button {
  position: relative;
  width: 20vw;
  background-color: rgba(34, 214, 158, 1);
  height: 10vw;
  top: -12vw;
  left: 65vw;
  border: none;
  border-radius: 20vw;
  color: #fff;
}
</style>