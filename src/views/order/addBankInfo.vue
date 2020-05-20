<template>
  <div class="container">
    <Header title="绑定银行卡"></Header>
    <div class="card">
      <div class="card-cell">
        <div class="label">银行卡号</div>
        <div class="value">6396651811231456</div>
        <div class="tag">查询</div>
      </div>
      <div class="card-cell">
        <div class="label">卡类型</div>
        <div class="value">储蓄卡</div>
      </div>
      <div class="card-cell">
        <div class="label">卡类型</div>
        <input type="text" placeholder="请输入银行名称" class="input" />
      </div>
    </div>
    <div class="card">
      <div class="card-cell">
        <div class="label">姓名</div>
        <input type="text" placeholder="请输入姓名" class="input" />
      </div>
      <div class="card-cell">
        <div class="label">身份证号</div>
        <input type="text" placeholder="请输入您的身份证号码" class="input" />
      </div>
    </div>
    <div class="card">
      <div class="card-cell">
        <div class="label">银行预留手机号</div>
        <input type="text" placeholder="请输入银行预留手机号" class="input" />
      </div>
      <div class="card-cell">
        <div class="label">验证码</div>
        <input type="text" placeholder="请输入验证码" class="input" />
        <div class="tag getCode">获取验证码</div>
      </div>
    </div>
    <div class="button">确认绑定</div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'addBankInfo',
  components: { Header },
  data() {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  .card {
    margin-top: 10px;
    background: #fff;
    .card-cell {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 15px;
      position: relative;
      .label {
        padding-right: 15px;
        width: 100px;
        font-size: 14px;
        color: #666;
      }
      .value {
        font-size: 15px;
        color: #333;
      }

      .tag {
        position: absolute;
        top: 14px;
        right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 11px;
        height: 21px;
        border: 1px solid rgba(22, 89, 213, 1);
        border-radius: 5px;
        color: #1659d5;
        &.getCode {
          border: 1px solid rgba(255, 83, 99, 1);
          color: #ff5363;
        }
      }
      .input {
        flex: 1;
        border: none;
        font-size: 14px;
        color: #999;
      }
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 53px auto 0;
    width: 330px;
    height: 44px;
    background: #e8281e;
    color: #fff;
    border-radius: 22px;
    font-size: 17px;
  }
}
</style>
