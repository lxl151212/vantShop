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
          <div class="content" :style="{ right: -8 + 'px' }">
            {{ item + '人' }}
          </div>
          <div class="bar" :class="{ lightBar: item <= currentPersons }"></div>
        </div>
      </div>
      <van-progress
        pivot-text=""
        color="#ee0a24"
        v-if="percentage"
        :percentage="percentage"
      />
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
  props: ['axisData'],
  data() {
    return {
      currentPersons: 0,
      personArray: [],
      moneyArray: []
    }
  },
  computed: {
    percentage() {
      const i = this.personArray.findIndex(value => value > this.currentPersons)
      const max = this.personArray[i]
      const min = this.personArray[i - 1] || 0
      if (i === -1) {
        return 100
      } else {
        const ratio = 100 / (this.personArray.length * 10)
        return (
          i * 10 * ratio +
          ((this.currentPersons - min) / ((max - min) / 10)) * ratio
        )
      }
    },
    perAxis() {
      return 100 / this.personArray.length
    }
  },
  methods: {},
  mounted() {
    const groupRules = JSON.parse(this.axisData.group_rules)
    const personArray = Object.keys(groupRules).map(i => {
      return Number(i)
    })
    const moneyArray = []
    for (const key in groupRules) {
      moneyArray.push({ num: Number(key), money: Number(groupRules[key]) })
    }
    this.personArray = personArray
    this.moneyArray = moneyArray
    this.currentPersons = this.axisData.num
  }
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
      right: -8px;
      &.light-money {
        color: red;
      }
    }
  }
}
</style>
