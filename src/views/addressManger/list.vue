<template>
  <div class="address-list">
    <Header title="收货地址"></Header>
    <div class="content">
      <div class="card" @click="goToEditAddress">
        <div class="name">
          秦无炎<small>18669511695</small><span class="tag">默认</span>
        </div>
        <div class="address">陕西省西安市未央区龙首北路怡兴花园4幢 101号</div>
        <img src="../../../static/icon_edit.png" alt="" />
      </div>
      <div class="card">
        <div class="name">
          秦无炎<small>18669511695</small><span class="tag">默认</span>
        </div>
        <div class="address">陕西省西安市未央区龙首北路怡兴花园4幢 101号</div>
        <img src="../../../static/icon_edit.png" alt="" />
      </div>
      <div class="add-btn">
        <img src="../../../static/icon_ new.png" alt="" />添加收货地址
      </div>
    </div>
    <!-- <div class="empty-image">
      <img src="../../../static/no_address.png" alt="" />
    </div> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'addressList',
  components: { Header },
  data() {
    return {}
  },
  methods: {
    goToEditAddress() {
      this.$router.push({
        path: '/editAddress'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.address-list {
  .content {
    .card {
      position: relative;
      margin-top: 15px;
      padding: 15px 28px 15px 20px;
      background: #fff;
      border-radius: 8px;
      .name {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        small {
          font-size: 12px;
          color: #999;
          padding: 0 5px;
        }
        .tag {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 12px;
          font-size: 10px;
          color: #fff;
          background: #e8281e;
          font-weight: normal;
          border-radius: 3px;
        }
      }
      .address {
        max-width: 228px;
        margin-top: 13px;
        font-size: 12px;
        color: #333;
      }
      img {
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -8px;
        width: 15px;
        height: 15px;
      }
    }
    .add-btn {
      position: fixed;
      bottom: 18px;
      left: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 345px;
      height: 44px;
      background: #333;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 22px;
      img {
        margin-right: 5px;
        width: 15px;
        height: 15px;
      }
    }
  }
  .empty-image {
    margin: 140px auto 0;
    width: 240px;
    height: 240px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
