<template>
  <div class="add-bank">
    <Header title="绑定银行卡"></Header>
    <Section>
      <van-swipe-cell v-for="(card, index) in cards" :key="index" :before-close="beforeClose">
        <div class="card" :class="{'js': card.name === '中国建设银行'}">
          <div class="icon-add-name">
            <div class="card-icon"></div>
            <div class="card-name">
              <div class="name">{{ card.name }}</div>
              <div>储蓄卡</div>
            </div>
          </div>
          <div class="card-number">
            <span class="star">****  ****  ****</span> {{card.num}}
          </div>
        </div>
        <template #right>
          <van-icon name="clear" color="#999" size="50" class="delete-btn" @click="handleDelect(card, index)"/>
        </template>
      </van-swipe-cell>
      <div class="add-card-container">
        <van-icon name="add" color="#E8281E" size="35"/>
        <div class="add-card-text">添加银行卡</div>
      </div>
    </Section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { Dialog } from 'vant';
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
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            this.cards.splice(this.delectIndex, 1)
            instance.close();
          });
          break;
      }
    },
    handleDelect(item, index) {
      this.delectIndex = index
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
Section{
  padding: 10px;
  .card{
    margin-bottom: 10px;
    height: 150px;
    background: #fe6161;
    border-radius: 12px;
    color: #fff;
    padding-left: 15px;
    padding-top: 15px;
    .icon-add-name{
      margin-bottom: 35px;
      overflow: hidden;
      .card-icon{
        float: left;
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50%;
        margin-right: 20px;
      }
      .card-name{
        font-size: 12px;
        padding-top: 3px;
        .name{
          font-size: 16px;
          margin-bottom: 3px;
        }
      }
    }
    .card-number{
      .star{
        font-size: 30px;
        vertical-align: text-top;
      }
      font-size: 22px;
    }
  }
  .card.js{
    background: blue;
  }
  .delete-btn{
    margin-top: 50px;
    margin-left: 8px
  }
  .add-card-container{
    margin-top: 2px;
    width: 100%;
    height: 90px;
    background: #fff;
    border-radius: 12px;
    text-align: center;
    padding-top: 15px;
    .add-card-text{
      color: #666;
      margin-top: 5px;
    }
  }
}
</style>
