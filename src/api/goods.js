import qs from 'qs'
// axios
import request from '@/utils/request'
// 获取商品列表
export const goodsList = params => {
  return request({
    url: '/group-buy/groupbuy-list',
    method: 'post',
    data: qs.stringify(params)
  })
}
// 获取商品详情
export const goodsDetail = params => {
  return request({
    url: '/group-buy/groupbuy-info',
    method: 'post',
    data: qs.stringify(params)
  })
}
export const defaultAddress = () => {
  return request({
    url: '/address/default',
    method: 'post'
  })
}
