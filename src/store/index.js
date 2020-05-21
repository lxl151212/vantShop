import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import bankCard from './modules/bankCard'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    bankCard
  },
  getters
})

export default store
