<template>
  <div class="add-mobile">
    <van-popup
      v-model="show"
      round
      position="bottom"
      :close-on-click-overlay="false"
      :style="{ height: '35%', borderRadius: '8px 8px 0 0' }"
    >
      <div class="title">绑定支付手机号</div>
      <div class="tips">绑定支付手机短信验证码已发至152****2783</div>
      <input placeholder="请输入验证码" type="text" class="gray-input" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'AddMobile',
  data() {
    return {
      show: false
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-mobile {
  .title {
    padding-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
  .tips {
    font-size: 15px;
    color: #333;
    padding: 43px 0 16px 16px;
  }
}
</style>
