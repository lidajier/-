<script setup>
import { useArticleStore } from '../api/store'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
const useArticle = useArticleStore()
const router = useRouter()
const pervious =()=>{
  console.log(111)
  router.back()
}
const imgData = [
  { url: 'src/assets/img/1.jpg', title: '机甲少女1' },
  { url: 'src/assets/img/2.jpg', title: '机甲少女2' },
  { url: 'src/assets/img/3.jpg', title: '机甲少女3' },
  { url: 'src/assets/img/4.jpg', title: '机甲少女4' }
]
const list = [
  {
    url: 'src/assets/img/4.jpg',
    title:
      '至了关矿边是书调群专团志空。原声取米该段约工石就说证响本电热验。把电出群华先样龙导照和要明易土是建。算学油管解实京革三节非技京元。',
    id: 5
  },
  {
    url: 'src/assets/img/5.jpg',
    title:
      '规说党及温般出本变建已说即起。心们政节完火业非院个等元可界越。她响基亲老老空况原情从很治。共接使便革出层车定物党这容放一方上',
    id: 7
  },
  {
    url: 'src/assets/img/6.jpg',
    title:
      '金称济该阶历指么花证山斯育收中开小。片济前按非例历使知细于己消色际今。战复现委月斯相任构离价有。关天务全维查省九面律目连增月取在例。族是权才拉年基期面国要义共能断。即区点九党却进如增然五形步。使见飞证验查因常及消近义己般石从连心.',
    id: 55
  },
  {
    url: 'src/assets/img/7.jpg',
    title:
      '发例场金领几飞并于色他应观。门书感技斗员林照员集前们事。程飞们米采级状世应教类都受除流价。热点行万变素设规候热共新统北明。',
    id: 556
  }
]
</script>
<script>

export default {
  data() {
    return {
      id: this.$route.query.id-1
    }
  },
  created() {}
  }
</script>
<template>
  <div class="HotHeaderFunction">
    <div class="return">
      <!-- 返回键 -->
      <button @click="pervious">
        <img src="@/img/return.png" style="height: 30px; width: 30px" />
      </button>
    </div>
    <div class="Hotword">
      <h2>热点详情</h2>
    </div>
    <!-- 分享键 -->
    <div class="share">
      <button>
        <img src="@/img/share.png" />
      </button>
    </div>
  </div>
  <div class="middletextDetails">
    <div class="big_img">
      <!-- 高清大图 -->
      <img :src="useArticle.articles[id].imgUrl" />
    </div>
    <div class="hotdetailsTitle">
      <!-- 对应的热点标题 -->
      <slot name="hotdetailsTitle"> {{ useArticle.articles[id].title }}</slot>
    </div>
    <div class="hot_avator">
      <slot name="hot_avator">{{ useArticle.articles[id].avator }}</slot>
      <!-- 这里是空格，分开显的好看 -->
      <solt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</solt>
      <solt name="hot_honor">{{ useArticle.articles[id].honor }}</solt>
    </div>
    <div class="hot_date">
      <!-- 最新日期 -->
      <solt name="hot_date">{{ useArticle.articles[id].time }}</solt>
    </div>
    <div class="hot_text">
      <!-- 详细内容 -->
      <solt name="hot_text">
        <p>
          {{ useArticle.articles[id].content }}
        </p></solt
      >
    </div>
  </div>
  <!-- 规定了他的转发等内容 -->
  <div class="hot_function">
    <div class="lookcount">
      <img src="@/img/view.png" style="width: 13px; height: 13px" />
      <solt name="">11451</solt>
    </div>
    <div class="sharecount">
      <img src="@/img/share.png" style="width: 13px; height: 13px" />
      <solt name="">1917</solt>
    </div>
    <div class="collectcount">
      <img src="@/img/star.png" style="width: 13px; height: 13px" />
      <solt name="">181</solt>
    </div>
    <div class="iscollect">
      <button id="iscollect">
        <img src="@/img/star(1).png" style="width: 15px; height: 15px" />
      </button>
    </div>
  </div>
  <div class="hot_button">
    <button class="fastLook">立即查看</button>
  </div>
  <div class="islike">
    <div class="guessLike">猜你喜欢:</div>
    <!-- 循环推荐的东西 -->
    <div class="guessyouLike">
      <div class="tuijian" v-for="item in imgData" :key="item.id">
        <img :src="item.url" style="width: 70px; height: 100px" />
        <div class="display">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped >
.HotHeaderFunction {
  width: 375px;
  height: 820px;
  position: relative;
  background-image: url(src/img/bgc-img.jpg);
}
.return {
  position: absolute;
  top: 20px;

  left: 30px;
  display: flex;
  justify-items: center;
}
.return button {
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-color: rgb(224, 224, 224);
  border: 1px solid white;
}
.HotHeaderFunction .Hotword {
  position: absolute;
  top: 30px;
  left: 150px;
  color: white;
}
.share {
  position: absolute;

  top: 20px;
  left: 300px;
  display: flex;
  justify-items: center;
}
.share button {
  width: 55px;
  height: 55px;
  border-radius: 60px;
  background-color: rgb(224, 224, 224);
  border: 1px solid white;
}
.HotHeaderFunction .share img {
  height: 30px;
  width: 30px;
}
.middletextDetails {
  width: 375px;
  height: 500px;

  position: absolute;
  top: 100px;
}
.big_img {
  margin: 10px auto;
  width: 350px;
  height: 180px;
  background-color: antiquewhite;
}
.big_img img {
  width: 350px;
  height: 180px;
}
.hotdetailsTitle {
  width: 350px;
  height: 35px;
  margin: 0 auto;
  font-weight: 1000;
  font-size: larger;
}
.hot_avator {
  margin-left: 15px;
  width: 200px;
  height: 10px;
  font-size: 8px;
}

.hot_date {
  margin-left: 300px;
  width: 140px;
  height: 10px;
  font-size: 8px;
}
.hot_text {
  padding: 30px;
  margin: 0 auto;
  width: 300px;
  height: 80px;

  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.hot_function {
  width: 350px;
  height: 50px;
  left: 15px;
  position: relative;
  bottom: 330px;
  border-radius: 20px;
  border-top: 0.3px solid;
  border-bottom: 0.3px solid;
}
.lookcount {
  position: absolute;
  top: 13px;
  left: 10px;
}
.sharecount {
  position: absolute;
  top: 13px;
  left: 110px;
}
.collectcount {
  position: absolute;
  top: 13px;
  left: 200px;
}
.iscollect {
  position: absolute;
  top: 11px;
  left: 310px;

  border-radius: 20px;
}
#iscollect {
  border-radius: 20px;
  border: 0.1px;
}
.hot_button {
  position: relative;
  background-color: bisque;
  width: 350px;
  height: 50px;
  bottom: 300px;
  left: 13px;
  border-radius: 20px;
}
.fastLook {
  width: 350px;
  height: 50px;
  border: 0px;
  border-radius: 20px;
  background-color: rgb(62, 122, 233);
  color: aliceblue;
  font-size: large;
}
.islike {
  width: 350px;
  height: 150px;
  left: 15px;
  position: relative;
  bottom: 280px;
  font-size: large;
}
.guessyouLike {
  display: flex;
  justify-content: space-around;
  top: 40px;
  left: 0px;
  width: 350px;
  height: 100px;
  position: absolute;
}
.tuijian {
  box-shadow: 0 0 5px rgb(62, 122, 233);
}
.display {
  font-size: small;
}
</style>
