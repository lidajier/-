<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import MiddleHotDetails from '../components/MiddleHotDetails.vue'
import { useArticleStore } from '../api/store.js'
import { onMounted } from 'vue'
import '../assets/Hompage.css'
const usearticles = useArticleStore()
onMounted(()=>{
  console.log(usearticles.articles[0].imgUrl)
})
//定义input和select
const input = ref('')
const select =ref('')
// const imgData = [
//   { url: 'src/assets/img/1.jpg', title: '' },
//   { url: 'src/assets/img/2.jpg', title: '' },
//   { url: 'src/assets/img/3.jpg', title: '' },
//   { url: 'src/assets/img/4.jpg', title: '' },
//   { url: 'src/assets/img/5.jpg', title: '' },
//   { url: 'src/assets/img/6.jpg', title: '' },
//   { url: 'src/assets/img/7.jpg', title: '' }
// ]
// 定义了两组数据
const hotList = [
  { url: 'src/assets/img/hot1.jpg' },
  { url: 'src/assets/img/hot2.jpg' }
]

const clickLink = () => {
  console.log("1111")
}
</script>
<script>

export default {
 
 
  data() {
    return {
      list: [
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
      ],
      article: '',
      img: ''
    }
  }
}
</script>

<template>
  <div  class="container">
    <div class="icon">
      <!-- <img src="@/assets/img/location.png" /> -->
      <img src="@/assets/img/location.png">
    </div>
    <div class="search">
      <!-- 搜索框 -->
      <el-input
        v-model="input"
        @input="onInput()"
        class="elInput"
        size="large"
        style="width: 50vw"
        placeholder="搜索..."
        :prefix-icon="Search"
      ></el-input>
      <!-- 选择框 -->
      <el-select
        v-model="select"
        placeholder="Select"
        style="width: 40vw"
        size="large"
      >
        <el-option label="Restaurant" value="1" />
        <el-option label="Order No." value="2" />
        <el-option label="Tel" value="3" />
      </el-select>
    </div>

    <div class="hot" ref="hot">
      <el-carousel :interval="4000" type="card" height="200px" width="100vw">
        <el-carousel-item v-for="item in list" :key="item.id">
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <!--  这是里面可以添加的文字 -->
          <a class="hot-group" href="">
            <img :src="item.url" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="groupBox">
      <MiddleHotDetails path="/hotsoptDetails" src="item.imgUrl">
        <template #itemImg>
          <a
            class="group"
            v-for="item in usearticles.articles"
            :key="item.id"
            @click="$router.push(`/hotsoptDetails?id=${item.id}`)"
          >
            <img :src="item.imgUrl" />
          
            
          </a>
        </template>
      </MiddleHotDetails>
    </div>
  </div>
  <div class="recommend">
    <!-- 热点 -->
    <div id="fire">
      <img src="@/assets/img/fire.png" />
      <span>近期热点:</span>
      <select name="综合排序" id="select1">
        <option value="" disabled selected hidden>综合排序</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <select name="" id="select2">
        <option value="" disabled selected hidden>按热度</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <select name="" id="select3">
        <option value="" disabled selected hidden>按人数</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  </div>

  <!-- 观看次数和热点图片 -->
  <!-- 后面要通过路由的方式去实现转换 -->
  <!-- <div v-for="item in hotList" :key="item.id" id="recentHot">
    <img :src="item.url" />
    <div class="recommend_List_Hot"> -->
      <!--   这里修改是热度 -->
      <!-- <div class="playcount"> -->
        <!-- 观看次数 -->
        <!-- <img src="../img/view.png" style="height: 8px; width: 8px" />
        <span id="hot_Font_size">{{ 11451 }}</span>
      </div> -->
      <!-- 转发量 -->
      <!-- <div class="sharecount">
        <img src="../img/share.png" style="height: 8px; width: 8px" />
        <span id="hot_Font_size">{{ 11451 }}</span>
      </div>
      <div class="starcount">
        <span id="hot_Font_size">热度:</span>
        <img src="@/img/star (1).png" style="height: 8px; width: 8px" />
        <img src="@/img/star (1).png" style="height: 8px; width: 8px" />
        <img src="@/img/star (1).png" style="height: 8px; width: 8px" />
        <img src="@/img/star (1).png" style="height: 8px; width: 8px" />
        <img src="@/img/star.png" style="height: 8px; width: 8px" />
      </div>
    </div>
  </div> -->
<div class="page-content">
  <div  class="card">
    <img src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
    <div  class="page-text">
      <h2>
      The City
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio. Quasi non molestias odio.
      </p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
    <div class="page-text">
      <h2>
        The Beach
      </h2>
      <p>
        Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio.
      </p>
    </div>
  </div>
</div>
</template>
