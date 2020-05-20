<template>
  <div class="basic-box">
    <div class="tabs">
      <div
        class="item"
        v-for="(item, index) in tabList"
        :key="index"
        @click="clickTab(index)"
      >
        <p>{{ item }}</p>
        <span class="border" :class="{ active: active === index }"></span>
      </div>
    </div>
    <div class="card-box">
      <div class="card" v-for="(cardItem, index) in cardList" :key="index">
        <img
          src="http://img1.imgtn.bdimg.com/it/u=2957674798,939146661&fm=26&gp=0.jpg"
          alt=""
        />
        <div class="detail">
          <div class="title">
            我是标题，后期可改，最多展示两行，我是标题，后期可改，最
            多展示两行。
          </div>
          <div class="price">
            <p><span>¥</span><small>360</small><em>.00</em></p>
            <p class="divider">—</p>
            <p>
              <span>¥</span>
              <small>1360</small>
              <em>.00</em>
              <em style="padding-right:4px;">/m2</em>
              <em>起</em>
            </p>
          </div>
          <div class="yuan-price">¥400.00—¥5000.00/m2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicIndex',
  data() {
    return {
      tabList: ['基装', '整装'],
      active: 0,
      cardList: [1, 2, 3, 4]
    }
  },
  methods: {
    clickTab(index) {
      this.active = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.basic-box {
  .tabs {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    background: #fff;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      color: #333;
      font-weight: bold;
      &:first-child {
        margin-right: 82px;
      }
      p {
        padding-bottom: 15px;
      }
      .border {
        display: inline-block;
        width: 40px;
        height: 4px;
        background: #fff;
        border-radius: 2px;
        &.active {
          background: linear-gradient(
            -83deg,
            rgba(255, 211, 35, 0.38) 0%,
            rgba(255, 87, 4, 1) 100%
          );
        }
      }
    }
  }
  .card-box {
    padding: 54px 10px 4px;
    .card {
      margin-top: 10px;
      img {
        width: 100%;
        height: 166px;
        border-radius: 5px 5px 0px 0px;
      }
      .detail {
        padding: 12px 10px 10px;
        background: #fff;
        border-radius: 0px 0px 5px 5px;
        .title {
          font-size: 12px;
          color: #333;
          font-weight: 500;
          line-height: 20px;
        }
        .price {
          display: flex;
          padding: 10px 0 4px;
          color: #e8281e;
          font-weight: bold;

          p {
            font-size: 12px;
          }
          small {
            font-size: 10px;
          }
          em {
            display: inline-block;
            font-size: 9px;
          }
        }
        .yuan-price {
          font-size: 10px;
          color: #999;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
