<template>
  <div class="app" id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  beforeCreate() {
    localStorage.setItem('sso_sid', '9f76f8908f36d21a6f61ca46838231fe')
  }
}
</script>
<style lang="scss"></style>
