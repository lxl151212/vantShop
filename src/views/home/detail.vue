<!-- home -->
<template>
  <div class="goods-detail">
    <div class="top">
      <div class="go-back" @click="goBack">
        <img src="../../../static/icon_back_circle.png" alt="" />
      </div>
      <div class="share" @click="openShare">
        <img src="../../../static/icon_share_black.png" alt="" />
      </div>
      <div class="play-btn" @click="goToReviewPic">
        <img src="../../../static/ico_shipinbofang.png" alt="" />
      </div>
      <van-swipe
        class="my-swipe"
        width="100%"
        :autoplay="3000"
        indicator-color="#000"
        v-if="goodsDetail.thumb && goodsDetail.thumb.length > 0"
      >
        <van-swipe-item
          v-for="(image, index) in goodsDetail.thumb"
          :key="index"
        >
          <img :src="image" class="swiper-image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="count-down">
      <div class="count-down__info">
        <div class="pay-price-box">
          <div class="pay-price">
            <span class="Symbol">¥</span>
            <span class="price">{{
              goodsDetail.low_price && goodsDetail.low_price[0]
            }}</span>
            <span class="unit"
              >.{{ goodsDetail.low_price && goodsDetail.low_price[1] }}</span
            >
            <span>起</span>
          </div>
          <div class="tag">{{ joinStatus }}</div>
        </div>
        <div class="yuan-price" v-if="goodsDetail.line_price">
          ¥{{ goodsDetail.line_price }}
        </div>
      </div>
      <div>
        <div class="count-down__time" v-if="countDown > 0">
          <div class="title">距离结束还有</div>
          <van-count-down
            :time="countDown"
            format="HH : mm : ss"
            :style="countDownStyle"
            @finish="finishCountDown"
          >
          </van-count-down>
        </div>
        <div class="count-down__time" v-else>
          <div class="title" style="padding-bottom:0">已结束</div>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="name">
        {{ goodsDetail.title }}
      </div>
      <span class="title">{{ goodsDetail.selling_point }}</span>
    </div>
    <GoodsCard :goodsDetail="goodsDetail"></GoodsCard>
    <div class="btn-box" @click="handlerJoin">
      <div class="btn">参团定金({{ goodsDetail.deposit_price }}元)</div>
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
import { mapGetters } from 'vuex'
import GoodsCard from '@/components/Card'
import { goodsDetail as goodsDetailApi } from '@/api/goods'
export default {
  components: { GoodsCard },
  data() {
    return {
      countDownStyle: {
        color: '#D7261C',
        'font-size': '16px',
        'font-weight': 'bold'
      },
      showShareModal: false,
      goodsDetail: {}
    }
  },

  computed: {
    ...mapGetters(['userName', 'selectedBankInfo']),
    countDown() {
      const currentTime = new Date().getTime()
      let diffTime = 0
      if (this.goodsDetail && this.goodsDetail.end_time) {
        diffTime = this.goodsDetail.end_time - currentTime
      }
      return diffTime
    },
    joinStatus() {
      let statusText = ''
      switch (this.goodsDetail && this.goodsDetail.status) {
        case '0':
          statusText = '团购中'
          break
        case '1':
          statusText = '已成团'
          break
        case '2':
          statusText = '已关闭'
          break
        case '3':
          statusText = '已过期'
          break
        case '4':
          statusText = '删除'
          break
      }
      return statusText
    }
  },

  created() {},

  mounted() {
    this.getGoodsDetail(this.$route.query.id)
  },

  methods: {
    handlerJoin() {
      this.$router.push({
        path: '/orderConfirm',
        query: { id: this.$route.query.id }
      })
    },
    async getGoodsDetail(goodsId) {
      const { data } = await goodsDetailApi({
        id: goodsId
      })
      if (data.low_price) {
        data.low_price = data.low_price.split('.')
      }
      if (data.thumb) {
        data.thumb = data.thumb.split(',')
      }
      if (data.join_list.length > 7) {
        data.avatar_list = data.join_list.splice(0, 8)
      } else {
        data.avatar_list = data.join_list
      }
      this.goodsDetail = data
    },
    openShare() {
      this.showShareModal = true
    },
    cancelShare() {
      this.showShareModal = false
    },
    goToReviewPic() {
      console.log('预览图片')
    },
    goBack() {
      history.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 310px;
}
.goods-detail {
  position: relative;
  padding-bottom: 55px;
  .top {
    position: relative;
    width: 100%;
    height: 310px;
    .go-back {
      position: absolute;
      top: 10px;
      left: 8px;
      width: 30px;
      height: 30px;
      z-index: 99;
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
      z-index: 99;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .play-btn {
      position: absolute;
      z-index: 99;
      width: 50px;
      height: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
