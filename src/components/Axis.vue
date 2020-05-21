<template>
  <div>
    <div class="current-persons">
      当前参团人数：<span>{{ currentPersons }}人</span>
    </div>
    <div class="time-axis-box">
      <div style="height:25px">
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
      personArray: [10, 20, 30, 50, 60, 70, 80, 90],
      moneyArray: [
        { num: 10, money: 1000 },
        { num: 20, money: 900 },
        { num: 30, money: 800 },
        { num: 50, money: 700 },
        { num: 60, money: 600 },
        { num: 70, money: 500 },
        { num: 80, money: 400 },
        { num: 90, money: 300 }
      ]
    }
  },
  computed: {
    percentage() {
      if (this.currentPersons > 70 && this.currentPersons <= 75) {
        return this.currentPersons * (100 / 82)
      } else if (this.currentPersons > 75 && this.currentPersons <= 81) {
        return this.currentPersons * (100 / 85)
      } else if (this.currentPersons > 81 && this.currentPersons <= 85) {
        return this.currentPersons * (100 / 88)
      } else if (this.currentPersons > 85 && this.currentPersons <= 90) {
        return this.currentPersons * (100 / 90)
      } else {
        return this.currentPersons * (100 / 80)
      }
    },
    perAxis() {
      return 100 / this.personArray.length
    }
  },
  methods: {},
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.van-progress {
  border-radius: 0;
}

.current-persons {
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  span {
    color: #e8281e;
  }
}

.time-axis-box {
  padding: 0 10px;
  position: relative;

  .person {
    float: left;
    text-align: center;
    position: relative;
    height: 25px;
    font-size: 12px;
    color: #666;
    .content {
      position: absolute;
      bottom: 0px;
      height: 25px;
    }
    .bar {
      position: absolute;
      bottom: 0px;
      right: 0px;
      border-right: 1px solid #999;
      height: 8px;
      background: #999;

      &.lightBar {
        background: #e8281e;
        border-right: 1px solid #e8281e;
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
    font-size: 11px;
    font-weight: 500;

    .money-content {
      position: absolute;
      bottom: 0px;
      right: -25%;
      &.light-money {
        color: red;
      }
    }
  }
}
</style>
