<!-- home -->
<template>
  <div class="app-container">
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" />
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="current-persons">当前参团人数{{ currentPersons }}</div>
    <div class="time-axis-box">
      <div style="height:25px">
        <div class="person first-person">
          <div class="content">0人</div>
          <div class="bar lightBar"></div>
        </div>
        <div
          class="person"
          v-for="item in personArray"
          :key="item"
          :style="{ width: 100 / personArray.length + '%' }"
        >
          <div class="content">{{ item + '人' }}</div>
          <div class="bar" :class="{ lightBar: item < currentPersons }"></div>
        </div>
      </div>
      <van-progress pivot-text="" color="#ee0a24" :percentage="percentage" />
      <div style="height:25px">
        <!-- <div class="first-money">
          <div class="money-content">{{ 1100 + '元' }}</div>
        </div> -->
        <div
          class="money"
          v-for="moneyItem in moneyArray"
          :key="moneyItem"
          :style="{ width: 100 / moneyArray.length + '%' }"
        >
          <div class="money-content">{{ moneyItem + '元' }}</div>
        </div>
      </div>
    </div>
    <div @click="gotoAbout">页面跳转</div>
  </div>
</template>

<script>
import { getUserName } from '@/api/user'

export default {
  data() {
    return {
      list: ['Vue-cli4'],
      currentPersons: 35,
      total: 80,
      personArray: [10, 20, 30, 40, 50, 60, 70, 80],
      moneyArray: [1000, 900, 800, 700, 600, 500, 400, 300]
    }
  },
  computed: {
    percentage() {
      return this.currentPersons * (100 / 80)
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
    gotoAbout() {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;

  .van-progress {
    border-radius: 0;
  }

  .current-persons {
    font-size: 18px;
  }

  .time-axis-box {
    padding: 0 20px;
    margin: 30px 0;
    position: relative;

    .person {
      float: left;
      text-align: center;
      position: relative;
      height: 25px;
      .content {
        position: absolute;
        bottom: 0px;
        height: 25px;
        right: -15%;
      }
      .bar {
        position: absolute;
        bottom: 0px;
        right: 0;
        border-right: 2px solid red;
        height: 8px;
        background: #999;

        &.lightBar {
          background: red;
        }
      }

      &.first-person {
        margin-left: 0px;
        .content {
          width: 20px;
          right: -10px;
        }
        .bar {
          right: -2px;
        }
      }
    }

    .money {
      float: left;
      text-align: center;
      position: relative;
      height: 25px;

      .money-content {
        position: absolute;
        bottom: 0px;
        right: -25%;
      }
    }
  }
}
</style>
