<template>
  <div class="list-box">
    <Header title="确认订单"></Header>
    <div class="content">订单列表</div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'orderList',
  components: { Header },
  props: {
    title: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    goBack() {
      history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
}
</style>
