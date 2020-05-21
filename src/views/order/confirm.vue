<template>
  <div class="confirm-box">
    <Header title="确认订单"></Header>
    <div class="content">
      <div class="address-info" @click="goToAddressList">
        <div class="address-icon">
          <img src="../../../static/pic__address.png" alt="" />
        </div>
        <div class="address-info__detail">
          <div class="name">房似锦<span class="mobile">18569365912</span></div>
          <div class="address">陕西省西安市朱雀街莱安逸珲21栋12030</div>
        </div>
        <div class="right-btn">
          <img src="../../../static/icon_more.png" alt="" />
        </div>
      </div>
      <div class="order-info">
        <div class="name">
          <img src="../../../static/pic_mall.png" />全友家私旗舰店
        </div>
        <div class="order-info__detail">
          <div class="img-box">
            <img
              src="http://img4.imgtn.bdimg.com/it/u=3922192529,3005968893&fm=26&gp=0.jpg"
            />
          </div>
          <div class="order-info__detail--info">
            <p>
              现代简约电视柜，小户型可伸缩 电视机小型机柜
            </p>
            <span>黑色，2m×1.5m</span>
            <div class="price">
              <small>¥100.00</small>
              <div class="num">x1</div>
            </div>
          </div>
        </div>
        <div class="total">共计1件，小计¥100<span>.00</span></div>
      </div>
    </div>
    <div class="pay-btn" @click="goToPay">
      <div class="deposit">
        定金价：
        <div class="deposit__price"><span>¥</span>100<small>.00</small></div>
      </div>
      <div class="btn">立即支付</div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'OrderConfirm',
  components: { Header },
  data() {
    return {}
  },
  methods: {
    goToPay() {
      this.$router.push({
        path: '/payment'
      })
    },
    goToAddressList() {
      this.$router.push({
        path: '/addressList'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  .address-info {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 23px 15px 18px;
    border-radius: 0px 0px 11px 11px;
    background: #fff;
    .address-icon {
      width: 21px;
      height: 21px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__detail {
      .name {
        padding-bottom: 10px;
        font-size: 15px;
        color: #333;
        font-weight: bold;
        .mobile {
          color: #666;
          padding-left: 10px;
        }
      }
      .address {
        font-size: 15px;
        color: #333;
        font-weight: bold;
      }
    }
    .right-btn {
      width: 14px;
      height: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .order-info {
    margin-top: 12px;
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    .name {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #333;
      font-weight: bold;
      img {
        margin-right: 5px;
        width: 14px;
        height: 13px;
      }
    }
    &__detail {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .img-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        width: 80px;
        height: 80px;
        box-shadow: 0px 4px 4px 0px rgba(211, 211, 211, 0.5);
        border-radius: 6px;
        flex-shrink: 0;
        img {
          width: 68px;
          height: 62px;
        }
      }
      &--info {
        flex: 1;
        p {
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        span {
          display: block;
          color: #999;
          font-size: 11px;
          padding: 10px 0;
        }
        .price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          small {
            font-size: 12px;
            color: #333;
            font-weight: bold;
          }
          .num {
            color: #999;
            font-size: 15px;
          }
        }
      }
    }
    .total {
      text-align: right;
      padding-top: 35px;
      font-size: 12px;
      font-weight: bold;
      color: #333;
      span {
        font-size: 10px;
      }
    }
  }
}
.pay-btn {
  width: 100%;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  .deposit {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #fff;
    font-size: 12px;
    color: #333;
    font-weight: bold;
    &__price {
      font-size: 20px;
      color: #e8281e;
      font-weight: bold;
      span {
        font-size: 14px;
      }
      small {
        font-size: 12px;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 55px;
    width: 132px;
    background: #e8281e;
    color: #fff;
    font-size: 16px;
  }
}
</style>
