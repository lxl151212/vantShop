<template>
  <div class="card-box">
    <div class="card">
      <div class="card__title"><span>拼团玩法</span></div>
      <img src="../../static/pic_play.png" alt="" class="pic-play" />
    </div>
    <div class="card">
      <div class="card__title">
        <span>团购进度</span>
        <p class="more-btn">
          查看更多 <img src="../../static/icon_more.png" alt="" />
        </p>
      </div>
      <div class="avatars">
        <img
          class="avatar"
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3374416169,262924133&fm=111&gp=0.jpg"
          alt=""
          v-for="avatar in imageList"
          :key="avatar"
        />
      </div>
    </div>
    <div class="card detail-card">
      <div class="card__title"><span>商品详情</span></div>
      <div class="detail-info">
        <p class="detail-info__name">产品参数:</p>
        <div class="parameter">
          <span>品牌:凯琳熙</span>
          <span>型号：safha02</span>
          <span>材质：木质</span>
        </div>
        <div class="parameter">
          <span>风格：简约现代</span>
        </div>
        <div class="parameter">
          <span>产地：广东省</span>
          <span>类型：组合</span>
          <span>适用空间：家</span>
        </div>
        <div class="detail-imageList">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589794271776&di=9c95d86195d8bf01582da159c8a747cb&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201511%2F5657c881b855b.jpg"
            alt=""
          />
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589794271776&di=9c95d86195d8bf01582da159c8a747cb&imgtype=0&src=http%3A%2F%2Fwww.biyebi.com%2FAttachments%2Fbaike%2F201511%2F5657c881b855b.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      imageList: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {}
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
      justify-content: space-between;
      margin-top: 22px;
      .avatar {
        width: 40px;
        height: 40px;
        border: 1px solid rgba(215, 215, 215, 1);
        border-radius: 50%;
      }
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
        justify-content: space-between;
        margin-bottom: 11px;
        font-size: 14px;
        color: #666;
      }
      .detail-imageList {
        padding-top: 13px;
        img {
          margin-top: -2px;
          width: 100%;
          height: 345px;
        }
      }
    }
    &.detail-card {
      padding-bottom: 0;
    }
  }
}
</style>
