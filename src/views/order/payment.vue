<template>
  <div class="payment-box">
    <Header title="确认支付"></Header>
    <div class="pay-info">
      <div class="price"><small>￥</small>200.00</div>
      <div class="order-num">订单编号&nbsp;&nbsp;12345678912345678901</div>
      <div class="pay-methods">
        <div class="title">支付方式</div>
        <div class="bank-card">
          <div class="selected-bank">
            <div class="selected-bank__info">
              <div class="left">
                <img
                  src="../../../static/pic_bank.png"
                  alt=""
                />工商银行储蓄卡(5569)
              </div>
              <img src="../../../static/icon_Selected.png" class="selected" />
            </div>
          </div>
          <div class="bind-bank" @click="GoToSelectBank">
            <span>选择银行卡</span
            ><img src="../../../static/icon_more.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <button @click="confirmPay" class="modal-button">确认支付</button>
    <div class="payment-modal">
      <van-popup
        v-model="showPaymentModal"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '55%', borderRadius: '8px 8px 0 0' }"
      >
        <div class="title">请支付</div>
        <div class="select-bank" @click="GoToSelectBank">
          <span>选择支付银行卡</span>
          <img src="../../../static/icon_right.png" />
        </div>
        <div class="selected-bank modal-selected-bank">
          <div class="selected-bank__info">
            <div class="left">
              <img
                src="../../../static/pic_bank.png"
                alt=""
              />工商银行储蓄卡(5569)
            </div>
            <img src="../../../static/icon_Selected.png" class="selected" />
          </div>
        </div>
        <input type="text" class="gray-input" placeholder="请输入支付验证码" />
        <div class="get-code">获取支付验证码</div>
        <button>确认支付</button>
      </van-popup>
    </div>
    <AuthModal :showAuthModal="showAuthModal"></AuthModal>
    <AddMobile></AddMobile>
  </div>
</template>

<script>
import Header from '@/components/Header'
import AuthModal from './components/AuthModal'
import AddMobile from './components/AddMobile'
export default {
  name: 'payment',
  components: { Header, AuthModal, AddMobile },
  props: {},
  data() {
    return {
      showAuthModal: false,
      showPaymentModal: true
    }
  },
  methods: {
    GoToSelectBank() {
      this.$router.push({
        path: '/addBank'
      })
    },
    confirmPay() {
      this.showAuthModal = true
    },
    closeAuthModal() {
      this.showAuthModal = false
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
      .bank-card {
        .bind-bank {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 0 0 35px;
          font-size: 15px;
          color: #333;
          font-weight: 500;
          img {
            width: 14px;
            height: 12px;
          }
        }
      }
    }
  }
  .selected-bank {
    &.modal-selected-bank {
      padding: 0 15px;
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #333;
        font-weight: 500;
        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }
      .selected {
        width: 18px;
        height: 18px;
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
  .payment-modal {
    .title {
      margin-top: 14px;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      text-align: center;
    }
    .select-bank {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 38px 15px 36px;
      font-size: 15px;
      color: #333;
      font-weight: 500;
      img {
        width: 14px;
        height: 14px;
      }
    }
    input {
      margin-top: 31px;
    }
    .get-code {
      padding: 10px 15px;
      text-align: right;
      color: #e8281e;
    }
  }
}
</style>
