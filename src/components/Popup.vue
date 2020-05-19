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
      <div class="name">正在拼团(42人)</div>
      <div class="count-down">
        <div class="title">距离结束还有</div>
        <van-count-down
          :time="time"
          format="HH : mm : ss"
          :style="countDownStyle"
        />
      </div>
      <div class="avatars">
        <div
          v-for="(avatar, index) in imageList"
          :key="avatar"
          class="image"
          :class="{ 'no-margin': (index + 1) % 6 === 0 }"
        >
          <img
            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3374416169,262924133&fm=111&gp=0.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {},
  computed: {},
  data() {
    return {
      active: 0,
      countDownStyle: {
        color: '#D7261C',
        'font-size': '18px',
        'font-weight': 'bold'
      },
      time: 30 * 60 * 60 * 1000,
      imageList: [1, 2, 3, 4, 5, 6, 7, 8]
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
