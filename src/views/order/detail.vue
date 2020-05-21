<template>
  <div class="order-detail">
    <Header title="拼团详情"></Header>
    <div class="header">
      <div class="status">
        <span>等待发货</span>
        <p class="tips">已成团，支付尾款后，商品发货</p>
      </div>
    </div>
    <div class="goods-info">
      <div class="title">商品信息</div>
      <div class="detail">
        <div class="image-box">
          <img
            src="http://img4.imgtn.bdimg.com/it/u=3922192529,3005968893&fm=26&gp=0.jpg"
          />
        </div>
        <div class="info">
          <span class="name">
            现代简约电视柜，小户型可伸缩 电视机小型机柜
          </span>
          <p class="color-size">
            <small>黑色，2m×1.5m</small>
            <small>x1</small>
          </p>
          <div class="price">¥<span class="large">388</span>.00</div>
        </div>
      </div>
    </div>
    <div class="pay-info-card">
      <div class="cell">
        <div class="label">支付定金时间</div>
        <div class="value">2020-05-12 21:00:30</div>
      </div>
      <div class="cell">
        <div class="label">支付尾款时间</div>
        <div class="value">2020-05-12 21:00:30</div>
      </div>
      <div class="cell">
        <div class="label">物流单号</div>
        <div class="value">2365548921556</div>
        <div class="tag">复制单号</div>
      </div>
      <div class="cell-divider"></div>
      <div class="cell space-between-cell">
        <div class="label">商品总额</div>
        <div class="value">¥1230.00</div>
      </div>
      <div class="cell space-between-cell">
        <div class="label">已付定金</div>
        <div class="value">¥1230.00</div>
      </div>
      <div class="cell space-between-cell">
        <div class="label">已付尾款</div>
        <div class="value">¥1230.00</div>
      </div>
      <div class="total-price">
        实付款：<span class="red">¥<b>1230</b>.00</span>
      </div>
    </div>
    <div class="actions">
      <button>取消订单</button>
      <button class="go-pay">去付款</button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'OrderDetail',
  components: { Header },
  data() {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order-detail {
  .header {
    height: 95px;
    background: url(../../../static/bg_state.png) no-repeat;
    background-size: 100% 100%;
    .status {
      padding: 30px 19px 15px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      .tips {
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }
  .goods-info {
    margin-top: -10px;
    padding: 15px;
    background: #fff;
    border-radius: 11px;
    .title {
      font-size: 14px;
      color: #333;
    }
    .detail {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .image-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-right: 20px;
        width: 80px;
        height: 80px;
        box-shadow: 0px 4px 4px 0px rgba(211, 211, 211, 0.5);
        border-radius: 6px;
        img {
          width: 68px;
          height: 62px;
        }
      }
      .info {
        .name {
          font-size: 14px;
          color: #333;
        }
        .color-size {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          color: #999;
          font-size: 12px;
        }
        .price {
          font-size: 12px;
          color: #333;
          font-weight: bold;
          .large {
            font-size: 15px;
          }
        }
      }
    }
  }
  .pay-info-card {
    margin-top: 10px;
    border-radius: 11px;
    background: #fff;
    padding: 18px 14px;
    .cell {
      position: relative;
      display: flex;
      align-items: center;
      padding-bottom: 22px;
      font-size: 12px;
      font-weight: 500;
      color: #999;
      .label {
        margin-right: 36px;
        width: 72px;
      }
      .value {
        color: #333;
      }
      .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 18px;
        position: absolute;
        top: 0;
        right: 0;
        color: #3552ff;
        font-size: 10px;
        border: 1px solid #3552ff;
        border-radius: 9px;
      }
      &.space-between-cell {
        justify-content: space-between;
      }
    }
    .total-price {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 12px;
      color: #333;
      font-weight: 500;
      .red {
        color: #e8281e;
        b {
          font-size: 15px;
        }
      }
    }
    .cell-divider {
      margin-bottom: 22px;
      width: 100%;
      height: 1px;
      background: #dedede;
    }
  }
  .actions {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px 0 140px;
    background: #fff;
    height: 55px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 34px;
      font-size: 15px;
      color: #666;
      font-weight: bold;
      background: #fff;
      border: 1px solid #dedede;
      border-radius: 17px;
      &.go-pay {
        background: #e8281e;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
}
</style>
