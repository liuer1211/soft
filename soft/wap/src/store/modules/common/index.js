const state ={
  isStick: true, // 英雄帖显隐
  isDream: false, // 逐梦令显隐
  isLoading: false, // loading
  isStick1: false, // 规则
  isStick2: false, // 悔棋
  isStick3: false, // 结束游戏
}

const mutations ={
  getStick(state,data) {
    state.isStick = data;
  },
  getStick1(state,data) {
    state.isStick1 = data;
  },
  getStick2(state,data) {
    state.isStick2 = data;
  },
  getStick3(state,data) {
    state.isStick3 = data;
  },
  getDream(state,data) {
    state.isDream = data;
  },
  getLoading(state,data) {
    state.isLoading = data;
  },
}

const actions ={
  getStick({commit}, data) {
    commit('getStick', data)
  },
  getStick1({commit}, data) {
    commit('getStick1', data)
  },
  getStick2({commit}, data) {
    commit('getStick2', data)
  },
  getStick3({commit}, data) {
    commit('getStick3', data)
  },
  getDream({commit}, data) {
    commit('getDream', data)
  },
  getLoading({commit}, data) {
    commit('getLoading', data)
  }
}

const getters ={}

export default {
  state,
  mutations,
  actions,
  getters
};