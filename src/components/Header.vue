<template>
  <div class="header-box">
    <div class="header">
      <img src="../../static/icon_back.png" class="back" />

      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
