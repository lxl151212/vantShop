<template>
  <div class="add-bank">
    <Header title="绑定银行卡"></Header>
    <Section>
      <van-swipe-cell
        v-for="(card, index) in cards"
        :key="index"
        :before-close="beforeClose"
      >
        <div class="card" :class="{ js: card.name === '中国建设银行' }">
          <div class="icon-add-name">
            <div class="card-icon"></div>
            <div class="card-name">
              <div class="name">{{ card.name }}</div>
              <div>储蓄卡</div>
            </div>
          </div>
          <div class="card-number">
            <span class="star">**** **** ****</span> {{ card.num }}
          </div>
        </div>
        <template #right>
          <!-- <van-icon
            name="delete"
            color="#999"
            size="50"
            class="delete-btn"
            @click="handleDelect(card, index)"
          /> -->
          <img
            src="../../../static/icon_delete.png"
            alt=""
            class="delete-btn"
          />
        </template>
      </van-swipe-cell>
      <div class="add-card-container" @click="goToAddBank">
        <van-icon name="add" color="#E8281E" size="30" />
        <div class="add-card-text">添加银行卡</div>
      </div>
    </Section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { Dialog } from 'vant'
export default {
  name: 'addBank',
  components: { Header },
  data() {
    return {
      cards: [
        {
          name: '招商银行',
          num: 5522
        },
        {
          name: '中国建设银行',
          num: 3366
        }
      ],
      delectIndex: -1
    }
  },
  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            this.cards.splice(this.delectIndex, 1)
            instance.close()
          })
          break
      }
    },
    handleDelect(item, index) {
      this.delectIndex = index
    },
    goToAddBank() {
      this.$router.push({
        path: '/addBankInfo'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: relative;
  left: 0;
  width: 100%;
  background: #ffffff;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  .back {
    position: absolute;
    top: 12px;
    left: 15px;
    width: 20px;
    height: 20px;
  }
}
section {
  padding: 10px;
  .card {
    margin-bottom: 10px;
    height: 150px;
    background: #e75f5f;
    border-radius: 12px;
    color: #fff;
    padding-left: 15px;
    padding-top: 15px;
    .icon-add-name {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .card-icon {
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50%;
        margin-right: 20px;
      }
      .card-name {
        font-size: 12px;
        padding-top: 3px;
        font-weight: 500;
        .name {
          font-size: 15px;
          margin-bottom: 3px;
        }
      }
    }
    .card-number {
      .star {
        font-size: 30px;
        vertical-align: text-top;
      }
      font-size: 22px;
    }
  }
  .card.js {
    background: #415af1;
  }
  .delete-btn {
    width: 50px;
    height: 50px;
    margin-top: 50px;
    margin-left: 7px;
  }
  .add-card-container {
    margin-top: 2px;
    width: 100%;
    height: 90px;
    background: #fff;
    border-radius: 12px;
    text-align: center;
    padding-top: 15px;
    .add-card-text {
      color: #333;
      margin-top: 5px;
    }
  }
}
</style>
