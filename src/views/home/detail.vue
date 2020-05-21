<!-- home -->
<template>
  <div class="goods-detail">
    <Header title="商品详情"></Header>
    <div class="top">
      <div class="go-back">
        <img src="../../../static/icon_back_circle.png" alt="" />
      </div>
      <div class="share" @click="openShare">
        <img src="../../../static/icon_share_black.png" alt="" />
      </div>
    </div>
    <div class="count-down">
      <div class="count-down__info">
        <div class="pay-price-box">
          <div class="pay-price">
            <span class="Symbol">¥</span>
            <span class="price">178</span>
            <span class="unit">.00</span>
            <span>起</span>
          </div>
          <div class="tag">团购中</div>
        </div>
        <div class="yuan-price">¥318.00</div>
      </div>
      <div class="count-down__time">
        <div class="title">距离结束还有</div>
        <van-count-down
          :time="time"
          format="HH : mm : ss"
          :style="countDownStyle"
        >
        </van-count-down>
      </div>
    </div>
    <div class="introduce">
      <div class="name">
        酷鲨 电视柜茶几组合小户型落地试听柜 影视柜 带抽屉 柚木色(加厚)80cm—120cm
      </div>
      <span class="title">全场包邮·急速发货·极速退款</span>
    </div>
    <GoodsCard></GoodsCard>
    <div class="btn-box" @click="handlerJoin">
      <div class="btn">参团定金(100.00元)</div>
    </div>
    <div class="share-box">
      <van-popup
        v-model="showShareModal"
        position="bottom"
        round
        :style="{ height: '36%', borderRadius: '8px 8px 0 0' }"
      >
        <div class="title">分享到</div>
        <div class="tips">
          组团做家装，人多价更低，将此拼团信息分享给更多朋友吧！
        </div>
        <div class="share-icon">
          <div class="item">
            <img src="../../../static/icon_wechat.png" />
            <div class="text">微信</div>
          </div>
          <div class="item">
            <img src="../../../static/icon_circle_of_friends.png" />
            <div class="text">朋友圈</div>
          </div>
          <div class="item">
            <img src="../../../static/icon_qq.png" />
            <div class="text">QQ</div>
          </div>
          <div class="item">
            <img src="../../../static/icon_space.png" />
            <div class="text">空间</div>
          </div>
        </div>
        <div class="cancel-btn" @click="cancelShare">取消</div>
      </van-popup>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import GoodsCard from '@/components/Card'
export default {
  components: { Header, GoodsCard },
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      countDownStyle: {
        color: '#D7261C',
        'font-size': '16px',
        'font-weight': 'bold'
      },
      showShareModal: false
    }
  },

  computed: {
    ...mapGetters(['userName', 'selectedBankInfo'])
  },

  created() {},

  mounted() {
    this.initData()
    console.log(this.selectedBankInfo)
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
    handlerJoin() {
      this.$router.push({
        path: '/orderConfirm'
      })
    },
    openShare() {
      this.showShareModal = true
    },
    cancelShare() {
      this.showShareModal = false
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-detail {
  position: relative;
  padding-bottom: 55px;
  .top {
    position: relative;
    width: 100%;
    height: 286px;
    background: #666;
    .go-back {
      position: absolute;
      top: 10px;
      left: 8px;
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .share {
      position: absolute;
      top: 10px;
      right: 8px;
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .count-down {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px 10px 19px;
    height: 55px;
    background: linear-gradient(
      88deg,
      rgba(244, 46, 35, 1) 0%,
      rgba(252, 200, 82, 1) 100%
    );

    &__info {
      .pay-price-box {
        display: flex;
        align-items: center;
        .pay-price {
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          .Symbol {
            font-size: 15px;
          }
          .price {
            font-size: 25px;
          }
          .unit {
            font-size: 14px;
          }
        }
        .tag {
          margin-left: 12px;
          width: 60px;
          height: 18px;
          background: #fff;
          border-radius: 9px;
          color: #f42f24;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
        }
      }

      .yuan-price {
        margin-top: 5px;
        font-size: 12px;
        color: #fff;
        text-decoration: line-through;
      }
    }
    &__time {
      color: #d7261c;
      text-align: center;
      font-weight: bold;
      .title {
        padding-bottom: 8px;
        font-size: 13px;
      }
      .colon {
        display: inline-block;
        margin: 0 4px;
        color: #d7261c;
      }
      .block {
        display: inline-block;
        width: 16px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        color: #d7261c;
      }
    }
  }
  .introduce {
    padding: 15px 18px 13px;
    background: #fff;
    border-radius: 0px 0px 12px 12px;
    .name {
      padding-bottom: 16px;
      line-height: 24px;
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
    .title {
      font-size: 11px;
      color: #999;
    }
  }
  .btn-box {
    z-index: 999;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    height: 55px;
    padding: 0 22px;
    box-shadow: 0px -4px 4px 0px rgba(194, 199, 218, 0.26);
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 44px;
      background: #e8281e;
      border-radius: 22px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .share-box {
    text-align: center;
    .title {
      font-size: 17px;
      color: #333;
      padding: 19px 0 15px;
    }
    .tips {
      padding-bottom: 25px;
      font-size: 12px;
      color: #666;
    }
    .share-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      img {
        width: 45px;
        height: 45px;
      }
      .text {
        font-size: 13px;
        color: #666;
        padding-top: 16px;
      }
    }
    .cancel-btn {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px 0;
      font-size: 17px;
      color: #999;
    }
  }
}
</style>
