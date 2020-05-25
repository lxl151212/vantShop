<template>
  <div class="popup-box">
    <div class="mask" @touchmove.prevent></div>
    <div class="content">
      <img
        src="../../static/icon_close.png"
        alt=""
        class="close"
        @click="closePopup()"
      />
      <div class="name">正在拼团({{ popupData.num }}人)</div>
      <div>
        <div class="count-down" v-if="countDown > 0">
          <div class="title">距离结束还有</div>
          <van-count-down
            :time="countDown"
            format="HH : mm : ss"
            :style="countDownStyle"
          />
        </div>
        <div class="count-down" v-else>已结束</div>
      </div>

      <div class="avatars">
        <div
          v-for="(avatar, index) in popupData.join_list"
          :key="index"
          class="image"
          :class="{ 'no-margin': (index + 1) % 6 === 0 }"
        >
          <img :src="avatar" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: ['popupData'],
  computed: {
    countDown() {
      const currentTime = new Date().getTime()
      let diffTime = 0
      if (this.popupData && this.popupData.end_time) {
        diffTime = this.popupData.end_time - currentTime
      }
      return diffTime
    }
  },

  data() {
    return {
      countDownStyle: {
        color: '#D7261C',
        'font-size': '18px',
        'font-weight': 'bold'
      }
    }
  },
  methods: {
    closePopup() {
      this.$parent.handlerClosePopup()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.popup-box {
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.3;
  }
  .content {
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 20px 11px;
    background: #fff;
    border-radius: 8px;
    width: 330px;
    .close {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 15px;
      right: 20px;
    }

    .name {
      text-align: center;
      font-size: 15px;
      color: #333;
      font-weight: 500;
    }
    .count-down {
      margin-top: 27px;
      text-align: center;
      font-size: 18px;
      color: #e8281e;
      font-weight: bold;
      .title {
        padding-bottom: 5px;
      }
    }
    .avatars {
      display: flex;
      flex-wrap: wrap;
      padding-top: 28px;
      .image {
        flex-shrink: 0;
        margin-bottom: 10px;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border: 1px solid #d7d7d7;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        &.no-margin {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
