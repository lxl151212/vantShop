const state = {
  selectedBankInfo: '中国建设银行'
}
const mutations = {
  SET_SELECTED_BANK_INFO(state, name) {
    state.selectedBankInfo = name
  }
}
const actions = {
  // 设置当前选中的银行卡信息
  setSelectedBankInfo({ commit }, name) {
    commit('SET_SELECTED_BANK_INFO', name)
  }
}
export default {
  state,
  mutations,
  actions
}
