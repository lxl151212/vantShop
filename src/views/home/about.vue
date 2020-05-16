<!-- home -->
<template>
  <div style="padding-top: 30px">
    <!-- <van-cell title="显示分享面板" @click="showShare = true" />
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    /> -->
    <van-progress :percentage="50" />
    <van-collapse v-model="activeNames" style="margin-top: 30px">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3" disabled
        >内容</van-collapse-item
      >
    </van-collapse>
    <van-cell title="显示分享面板" @click="showShare = true" />
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
import wx from 'weixin-js-sdk'
import { Toast } from 'vant'

export default {
  data() {
    return {
      activeNames: ['1'],
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' }
      ]
    }
  },

  computed: {
    ...mapGetters(['userName'])
  },

  created() {
    console.log(wx)
  },

  mounted() {
    this.initData()
  },

  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => {})
        .catch(() => {})
    },
    onSelect(option) {
      Toast(option.name)
      this.showShare = false
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
}
</style>
