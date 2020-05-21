<template>
  <div class="auth-modal">
    <van-popup
      v-model="showAuthModal"
      round
      position="bottom"
      :style="{ height: '40%', borderRadius: '8px 8px 0 0' }"
      @click-overlay="clickOverlay"
      safe-area-inset-bottom
    >
      <div class="title">绑定支付授权</div>
      <p class="text">
        本产品支付采用银行卡支付，为保障支付
        安全，首次使用前需绑定支付手机号，该手机
        号码用于获得支付验证码，是否同意绑定支付 手机号码？
      </p>
      <div class="buttons">
        <div class="button refuse" @click="clickRefuse">拒绝</div>
        <div class="button allow" @click="clickAllow">允许</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'AuthModal',
  props: {
    showAuthModal: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    clickRefuse() {
      this.$parent.closeAuthModal()
    },
    clickAllow() {
      this.$parent.closeAuthModal('点了允许')
    },
    clickOverlay() {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;
  font-weight: bold;
}
.text {
  padding: 43px 34px 45px;
  font-size: 15px;
  color: #333;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 47px;
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 44px;
    border-radius: 22px;
    font-size: 18px;
    font-weight: 500;

    &.refuse {
      border: 1px solid rgba(194, 194, 194, 1);
      color: #999;
    }
    &.allow {
      border: 1px solid #e8281e;
      background: #e8281e;
      color: #fff;
    }
  }
}
</style>
