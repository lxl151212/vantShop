<template>
  <div class="edit-box">
    <Header title="编辑收货地址"></Header>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      save-button-text="保存地址"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import Header from '@/components/Header'
import { Toast } from 'vant'
import areaList from '../../assets/area'
export default {
  name: 'editAdress',
  components: { Header },
  data() {
    return {
      areaList
    }
  },
  methods: {
    onSave() {
      Toast('save')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
