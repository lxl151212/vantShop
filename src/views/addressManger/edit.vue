<template>
  <div class="edit-box">
    <Header title="编辑收货地址"></Header>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      show-delete
      save-button-text="保存地址"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      :address-info="AddressInfo"
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
      areaList,
      AddressInfo: {
        id: '10001',
        name: 'name',
        tel: '18829783382',
        province: '天津市',
        city: '天津市',
        county: '和平区',
        areaCode: '110102',
        addressDetail: '11111',
        isDefault: false
      }
    }
  },
  methods: {
    onSave(content) {
      Toast('save')
      console.log(content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
