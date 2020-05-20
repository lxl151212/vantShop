<template>
  <div class="add-bank">
    <Header title="绑定银行卡"></Header>
    <div class="content">添加银行卡</div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'addBank',
  components: { Header },
  data() {
    return {}
  },
  methods: {}
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
</style>
