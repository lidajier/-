<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div v-else><slot name="itemIconActive"></slot></div>
    <div :style="activeStyle"><slot name="itemText"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  comments: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  computed: {
    isActive() {
      //判断
      //return this.$route.path.indexOf(this.path) !== -1
      //return this.$route.path === this.path
      return this.$route.path.indexOf(this.path) ? false : true
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 3px;
}
.active {
  color: red;
}
</style>

