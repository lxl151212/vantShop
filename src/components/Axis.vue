<template>
  <div>
    <div class="current-persons">当前参团人数{{ currentPersons }}</div>
    <div class="time-axis-box">
      <div style="height:25px">
        <div class="person first-person">
          <div class="content">1人</div>
          <div class="bar lightBar"></div>
        </div>
        <div
          class="person"
          v-for="item in personArray"
          :key="item"
          :style="{ width: perAxis + '%' }"
        >
          <div class="content" :style="{ right: -(perAxis * 2) + '%' }">
            {{ item + '人' }}
          </div>
          <div class="bar" :class="{ lightBar: item <= currentPersons }"></div>
        </div>
      </div>
      <van-progress pivot-text="" color="#ee0a24" :percentage="percentage" />
      <div style="height:25px">
        <div class="first-money">
          <div class="money-content">{{ 1100 + '元' }}</div>
        </div>
        <div
          class="money"
          v-for="moneyItem in moneyArray"
          :key="moneyItem.num"
          :style="{ width: perAxis + '%' }"
        >
          <div
            class="money-content"
            :class="{ 'light-money': moneyItem.num <= currentPersons }"
          >
            {{ moneyItem.money + '元' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Axis',
  data() {
    return {
      currentPersons: 40,
      total: 80,
      personArray: [10, 20, 30, 40, 50, 60, 70, 80],
      moneyArray: [
        { num: 10, money: 1000 },
        { num: 20, money: 900 },
        { num: 30, money: 800 },
        { num: 40, money: 700 },
        { num: 50, money: 600 },
        { num: 60, money: 500 },
        { num: 70, money: 400 },
        { num: 80, money: 300 }
      ]
    }
  },
  computed: {
    percentage() {
      return this.currentPersons * (100 / 80)
    },
    perAxis() {
      return 100 / this.personArray.length
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.van-progress {
  border-radius: 0;
}

.current-persons {
  font-size: 18px;
}

.time-axis-box {
  padding: 0 30px;
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
    }
    .bar {
      position: absolute;
      bottom: 0px;
      right: 0px;
      border-right: 2px solid #999;
      height: 8px;
      background: #999;

      &.lightBar {
        background: red;
        border-right: 2px solid red;
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

  .first-money {
    float: left;
    position: relative;
    text-align: center;
    height: 25px;
    .money-content {
      position: absolute;
      width: 38px;
      bottom: 0px;
      left: -25px;
      color: red;
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
      right: -38%;
      &.light-money {
        color: red;
      }
    }
  }
}
</style>
