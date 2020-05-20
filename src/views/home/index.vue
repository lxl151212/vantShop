<!-- home -->
<template>
  <div class="app-container">
    <!-- <Axis></Axis> -->
    <Header title="首页"></Header>
    <van-swipe
      class="my-swipe"
      width="100%"
      :autoplay="3000"
      indicator-color="#000"
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swiper-image" />
      </van-swipe-item>
    </van-swipe>
    <div class="goods-list-box">
      <sticky :sticky-top="0">
        <div class="tabs fixed-tabs">
          <div
            class="tab-item"
            v-for="(tabItem, tabIndex) in tabList"
            :key="tabItem"
            @click="clickTab(tabIndex)"
          >
            <span class="title">{{ tabItem }}</span>
            <div
              class="border"
              :class="{ 'current-border': tabActive === tabIndex }"
            ></div>
          </div>
        </div>
      </sticky>
      <div class="goods-list">
        <div
          class="goods-item"
          v-for="goodsItem in goodList"
          :key="goodsItem"
          @click="goToGoodsDetail"
        >
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589794271776&di=9c95d86195d8bf01582da159c8a747cb&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201511%2F5657c881b855b.jpg"
            alt=""
            class="goods-item__image"
          />
          <div class="goods-info">
            <div class="detail">
              日式木质简约风入户沙发起居室客厅多人转角室客厅多人转角
            </div>
            <div class="pay-price">
              <span class="large">¥36.00</span>
              <span>起</span>
            </div>
            <div class="price">¥400.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserName } from '@/api/user'
import Axis from '@/components/Axis'
import Header from '@/components/Header'
import Sticky from '@/components/Sticky'
export default {
  components: { Axis, Header, Sticky },
  data() {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589794271776&di=9c95d86195d8bf01582da159c8a747cb&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201511%2F5657c881b855b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589794271776&di=9c95d86195d8bf01582da159c8a747cb&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201511%2F5657c881b855b.jpg'
      ],
      tabActive: 0,
      tabList: ['品牌闪购', '定制核量类'],
      goodList: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted() {},

  methods: {
    handleSearch() {
      const params = {
        id: 123,
        name: '張三'
      }
      getUserName(params, '00001').then(res => {
        console.log(res)
      })
    },
    goToGoodsDetail() {
      this.$router.push({
        path: '/detail'
      })
    },
    clickTab(index) {
      this.tabActive = index
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;
  .my-swipe {
    .swiper-image {
      width: 100%;
      height: 190px;
    }
  }

  .goods-list-box {
    margin: 0 0 9px;
    .tabs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 96px;
      font-size: 16px;
      color: #333;
      font-weight: 500;
      padding-top: 14px;
      // &.fixed-tabs {
      //   background: #fff;
      //   position: fixed;
      //   top: 0;
      //   right: 0;
      //   left: 0;
      // }
      .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .title {
        padding-bottom: 11px;
      }

      .border {
        width: 40px;
        height: 4px;
        background: transparent;
        border-radius: 4px;
        &.current-border {
          background: linear-gradient(
            -83deg,
            rgba(255, 211, 35, 0.38) 0%,
            rgba(255, 87, 4, 1) 100%
          );
        }
      }
    }
    .goods-list {
      display: flex;
      margin: 7px 11px 0;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .goods-item {
        margin-top: 10px;
        background: #fff;
        width: 171px;
        border-radius: 0px 0px 5px 5px;

        &__image {
          width: 100%;
          height: 166px;
          border-radius: 5px 5px 0px 0px;
        }
        .goods-info {
          padding: 12px 11px 11px;
          .detail {
            font-size: 12px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 500;
          }
          .pay-price {
            padding: 11px 0 6px;
            font-size: 9px;
            color: #e8281e;
            font-weight: bold;
            .large {
              padding-right: 5px;
              font-size: 14px;
            }
          }
          .price {
            font-size: 10px;
            color: #999999;
            text-decoration: line-through;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
