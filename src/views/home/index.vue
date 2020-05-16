<!-- home -->
<template>
  <div class="app-container">
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" />
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="time-axis"></div>
  </div>
</template>

<script>
import { getUserName } from '@/api/user'

export default {
  data() {
    return {
      list: ['Vue-cli4']
    }
  },

  computed: {},

  mounted() {},

  methods: {
    handleSearch() {
      const params = {
        id: 123,
        name: '張三'
      }
      getUserName(params, '00001').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;

  .time-axis {
    width: 100%;
    height: 4px;
    background: red;
  }
}
</style>
