<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/homepage" activeColor="purple">
        <template v-slot:item-icon>
          <img src="../img/middle.png" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// import TabBar from 'src/components/TabBar.vue'
// import TabBarItem from 'src/components/TabBarItem.vue'
import TabBar from './MiddleHotDetails.vue'
import TabBarItem from '../components/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style></style>
