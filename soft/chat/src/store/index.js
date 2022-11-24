import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import novel from './modules/novel'
import common from './modules/common'

export default new Vuex.Store({
  modules: {
    novel,
    common
  }
});