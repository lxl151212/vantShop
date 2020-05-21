<template>
  <div class="list-box">
    <Header title="拼团订单"></Header>
    <van-tabs class="tab" @click="tabClick">
      <van-tab
        v-for="(tab, index) in tabs"
        :title="tab.name"
        :key="index"
      ></van-tab>
    </van-tabs>
    <div
      class="order-container"
      v-for="(order, index) in orderList"
      :key="index"
      @click="goToOrderDetail"
    >
      <div class="header-container">
        <div class="left">
          <img src="../../../static/pic_mall.png" alt="" class="image" />
          <span style="vertical-align: top">全友家私旗舰店</span>
        </div>
        <div class="order-type">{{ order.type }}</div>
      </div>
      <div class="section-container">
        <div class="img-box">
          <img
            src="http://img4.imgtn.bdimg.com/it/u=3922192529,3005968893&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <div class="title">{{ order.title }}</div>
          <div class="describe">
            {{ order.describe }} <span style="float: right;">x1</span>
          </div>
          <div class="price">
            <span class="font-size-samll">￥</span>{{ order.price
            }}<span class="font-size-samll">.00</span>
          </div>
          <div class="total">
            共计{{ order.total }}件商品，小计￥<span class="font-size-large">{{
              order.total * order.price
            }}</span
            >.00
          </div>
          <div class="btn-group">
            <van-button round type="default" hairline size="small"
              >取消订单</van-button
            >
            <van-button round type="danger" size="small">去付款</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'orderList',
  components: { Header },
  props: {
    title: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      active: 0,
      tabs: [
        { name: '全部', id: '0' },
        { name: '待付款', id: '1' },
        { name: '拼团中', id: '2' },
        { name: '待补价', id: '3' },
        { name: '待发货', id: '4' },
        { name: '待评价', id: '5' }
      ],
      orderList: [],
      copyOrderList: [
        {
          type: '待付款',
          title: '现代简约电视柜，小户型可伸缩电视机小型机柜',
          describe: '黑色, 2m x 1.5m',
          total: 2,
          price: 388
        },
        {
          type: '拼团中',
          title: '现代简约电视柜，小户型可伸缩电视机小型机柜',
          describe: '黑色, 2m x 1.5m',
          total: 2,
          price: 388
        }
      ]
    }
  },
  mounted() {
    this.orderList = this.copyOrderList
  },
  methods: {
    tabClick(title, name) {
      if (name === '全部') {
        this.orderList = this.copyOrderList
      } else {
        this.orderList = this.copyOrderList.filter(item => name === item.type)
      }
    },
    goToOrderDetail() {
      this.$router.push({
        path: '/orderDetail'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-box >>> .van-tabs__line {
  background: linear-gradient(
    -83deg,
    rgba(255, 211, 35, 0.38) 0%,
    rgba(255, 87, 4, 1) 100%
  ) !important;
}
</style>
<style scoped lang="scss">
.order-container {
  border-radius: 12px;
  background: #fff;
  padding: 15px;
  overflow: hidden;
  margin-top: 14px;
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .left {
      display: flex;
      align-items: center;
      .image {
        width: 15px;
        height: 15px;
        margin-right: 4px;
      }
    }

    .order-type {
      color: #e8281e;
      float: right;
    }
  }
  .section-container {
    margin-top: 15px;
    display: flex;
    align-items: flex-start;
    .img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      img {
        width: 68px;
        height: 62px;
      }
    }
    .content {
      .title {
        font-size: 14px;
      }
      .describe {
        margin: 10px 0;
        font-size: 11px;
        color: #999;
      }
      .price {
        font-weight: bold;
        font-size: 14px;
        color: #5d5d5d;
        .font-size-samll {
          font-size: 12px;
        }
      }
      .total {
        float: right;
        font-size: 12px;
        margin: 15px 0;
        .font-size-large {
          font-size: 15px;
        }
      }
    }
  }
  .btn-group {
    float: right;
    button {
      padding: 8px 25px;
      margin-left: 15px;
    }
  }
}
</style>
