<template>
  <div class="hot-details" @click="itemClick">
    <slot name="itemImg"></slot>
  </div>
</template>
<script>
export default {
  name: 'MiddleHotDetails',
  comments: {},
  props: {
    path: String,
    src: String
  },
  data() {
    return {}
  },
  computed: {}
  // methods: {
  //   itemClick() {
  //     this.$router.replace(this.path)
  //     this.$router
  //   }
  // }
}
</script>

<style scoped lang="less">
.hot-details {
  justify-content: center;
  display: flex;
  gap: 20px;
  width: 375px;
  height: 66px;
  position: relative;
  top: 10px;
  right: 5px;
}
.hot-details img {
  width: 72px;
  height: 70px;
}
.hot-details a {
  width: 100px;
  height: 66px;
}
</style>
