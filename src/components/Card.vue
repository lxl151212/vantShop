<template>
  <div class="card-box">
    <div class="card">
      <div class="card__title"><span>拼团玩法</span></div>
      <img src="../../static/pic_play.png" alt="" class="pic-play" />
    </div>
    <div
      class="card"
      v-if="goodsDetail.join_list && goodsDetail.join_list.length > 0"
    >
      <div class="card__title">
        <span>团购进度</span>
        <p class="more-btn" @click="handlerShowPopup">
          查看更多 <img src="../../static/icon_more.png" alt="" />
        </p>
      </div>
      <div class="avatars">
        <img
          class="avatar"
          v-for="(avatar, index) in goodsDetail.avatar_list"
          :key="index"
          :src="avatar"
          alt=""
        />
      </div>
      <div class="progress-box">
        <Axis :axisData="goodsDetail"></Axis>
      </div>
    </div>
    <div class="card">
      <div class="card__title"><span>商品详情</span></div>
      <div class="detail-info">
        <p class="detail-info__name">产品参数:</p>
        <div
          class="parameter"
          v-for="(parameterItem, index) in goodsDetail.arrribute"
          :key="index"
        >
          <span>{{ parameterItem.attr_name }}</span>
          <span>{{ parameterItem.attr_value_value }}</span>
        </div>
        <div class="detail-content" v-html="goodsDetail.content"></div>
      </div>
    </div>
    <Popup v-if="showPopup" :popupData="goodsDetail"></Popup>
  </div>
</template>

<script>
import Popup from './Popup'
import Axis from './Axis'
import { forMatTime } from '@/utils/fomatDate'
export default {
  name: 'Card',
  components: { Popup, Axis },
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageList: [1, 2, 3, 4, 5, 6],
      showPopup: false,
      popPupStyle: {
        height: 'auto',
        width: '330px',
        'border-radius': '12px'
      }
    }
  },
  methods: {
    handlerShowPopup() {
      this.showPopup = true
    },
    handlerClosePopup() {
      this.showPopup = false
    }
  },
  mounted() {
    console.log(forMatTime(1572502840091))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-box {
  .card {
    margin-top: 11px;
    border-radius: 12px;
    padding: 9px 14px 32px;
    background: #fff;
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: #333;
      font-weight: bold;

      .more-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #999;
        line-height: 24px;
        img {
          width: 12px;
          height: 12px;
        }
      }
    }
    .pic-play {
      margin-top: 18px;
      width: 100%;
    }

    .avatars {
      display: flex;
      align-items: center;

      margin-top: 22px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(222, 222, 222, 1);
      .avatar {
        width: 40px;
        height: 40px;
        border: 1px solid rgba(215, 215, 215, 1);
        border-radius: 50%;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .progress-box {
      margin-top: 14px;
    }
    .detail-info {
      &__name {
        padding: 23px 0 21px;
        font-size: 14px;
        color: #999;
      }
      .parameter {
        display: flex;
        align-items: center;
        margin-bottom: 11px;
        font-size: 14px;
        color: #666;
        span {
          padding-right: 50px;
          &:last-child {
            padding-right: 0;
          }
        }
      }
      .detail-content {
        padding-top: 13px;
        img {
          margin-top: -2px;
          width: 100%;
          height: 345px;
        }
      }
    }
  }
  .popup {
    .title {
      text-align: center;
      margin-top: 15px;
      font-size: 15px;
      color: #333;
    }
    .count-down {
      display: flex;
      flex-direction: column;
      margin-top: 27px;
      line-height: 24px;
      text-align: center;
      color: #e8281e;
      font-size: 18px;
      font-weight: bold;
    }
    .Popup-avatars {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 28px 20px 21px;
      width: 100%;
      height: 30px;
      box-sizing: border-box;
      &--avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
