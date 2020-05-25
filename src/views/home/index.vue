<template>
  <div class="app-container">
    <Header title="首页"></Header>
    <van-swipe
      class="my-swipe"
      width="100%"
      :autoplay="3000"
      indicator-color="#000"
    >
      <van-swipe-item
        v-for="(image, index) in slideImages"
        :key="index"
        @click="clickSwipeItem(image.url)"
      >
        <img :src="image.image" class="swiper-image" />
      </van-swipe-item>
    </van-swipe>
    <div class="goods-list-box">
      <sticky :sticky-top="0">
        <div class="tabs fixed-tabs">
          <div
            class="tab-item"
            v-for="(tabItem, tabIndex) in tabList"
            :key="tabItem.id"
            @click="clickTab(tabIndex)"
          >
            <span class="title">{{ tabItem.type }}</span>
            <div
              class="border"
              :class="{ 'current-border': tabActive === tabIndex }"
            ></div>
          </div>
        </div>
      </sticky>
      <van-list
        v-if="goodList.length > 0"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="10"
      >
        <div class="goods-list">
          <van-cell
            v-for="goodsItem in goodList"
            :key="goodsItem.id"
            @click="goToGoodsDetail(goodsItem.id)"
          >
            <div class="goods-item">
              <img :src="goodsItem.imgUrl" alt="" class="goods-item__image" />
              <div class="goods-info">
                <div class="detail">
                  {{ goodsItem.title }}
                </div>
                <div class="pay-price" v-if="goodsItem.low_price">
                  <span class="large">¥{{ goodsItem.low_price }}</span>
                  <span>起</span>
                </div>
                <div class="price" v-if="goodsItem.line_price">
                  ¥{{ goodsItem.line_price }}
                </div>
              </div>
            </div>
          </van-cell>
        </div>
      </van-list>

      <div class="no-data" v-if="goodList.length === 0">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
import { getUserName } from '@/api/user'
import { goodsList } from '@/api/goods'
import Header from '@/components/Header'
import Sticky from '@/components/Sticky'
export default {
  components: { Header, Sticky },
  data() {
    return {
      tabActive: 0,
      tabList: [
        { id: 5, type: '品牌闪购' },
        { id: 6, type: '定制核量类' }
      ],
      goodList: [],
      page: 1,
      loading: false,
      finished: false,
      total: 0,
      pagesize: 15,
      slideImages: []
    }
  },
  mounted() {
    this.getGoodsList(this.tabList[this.tabActive].id)
  },

  methods: {
    getGoodsList(cateId) {
      const params = {
        cate_id: cateId,
        page: this.page,
        pagesize: this.pagesize
      }
      goodsList(params).then(res => {
        if (res.data) {
          const { pages, datas, slide_images: slideImages } = res.data
          const goodListData = datas.map(item => {
            if (item.thumb) {
              item.imgUrl = item.thumb.split(',')[0]
            } else {
              item.imgUrl =
                'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00020-3503.jpg'
            }
            return item
          })
          this.loading = false
          this.total = pages.totalCount
          this.slideImages = slideImages
          if (datas == null || datas.length === 0) {
            // 加载结束
            this.finished = true
            return
          }
          this.goodList = this.goodList.concat(goodListData)
          if (this.goodList.length >= this.total) {
            this.finished = true
          }
        }
      })
    },
    onLoad() {
      this.page++
      this.getGoodsList()
    },
    goToGoodsDetail(goodsId) {
      this.$router.push({
        path: '/detail',
        query: { id: goodsId }
      })
    },
    clickTab(index) {
      this.tabActive = index
      this.goodList = []
      this.getGoodsList(this.tabList[this.tabActive].id)
    },
    clickSwipeItem(url) {
      window.location.href = url
    }
  }
}
</script>
<style lang="scss" scoped>
.van-cell {
  padding: 0;
  display: flex;
  background: #f7f6fb;
  width: 171px;
}
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
    .no-data {
      margin-top: 160px;
      font-size: 16px;
      color: #666;
      text-align: center;
    }
  }
}
</style>
