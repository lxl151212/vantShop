<template>
  <div class="payment-box">
    <Header title="确认支付"></Header>
    <div class="pay-info">
      <div class="price"><small>￥</small>200.00</div>
      <div class="order-num">订单编号&nbsp;&nbsp;12345678912345678901</div>
      <div class="pay-methods">
        <div class="title">支付方式</div>
        <div class="bank-card"></div>
      </div>
    </div>

    <button>确认支付</button>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'payment',
  components: { Header },
  props: {},
  data() {
    return {
      active: 0
    }
  },
  methods: {
    goBack() {
      history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.payment-box {
  .pay-info {
    margin-top: 11px;
    background: #fff;
    border-radius: 12px;

    .price {
      color: #333;
      font-size: 40px;
      padding: 42px 0 50px;
      font-weight: 400;
      text-align: center;
      small {
        font-size: 25px;
      }
    }
    .order-num {
      margin: 0 22px;
      padding: 0 0px 22px;
      font-size: 15px;
      color: #333;
      border-bottom: 1px solid rgba(240, 240, 240, 1);
    }
    .pay-methods {
      padding: 25px 21px 18px;
      .title {
        padding-bottom: 21px;
        font-size: 15px;
        color: #999;
        font-weight: 400;
      }
    }
  }
  button {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 55px;
    background: #e8281e;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
