const state ={
  isStick: true, // 英雄帖显隐
  isDream: false, // 逐梦令显隐
}

const mutations ={
  getStick(state,data) {
    state.isStick = data;
  },
  getDream(state,data) {
    state.isDream = data;
  },
}

const actions ={
  getStick({commit}, data) {
    commit('getStick', data)
  },
  getDream({commit}, data) {
    commit('getDream', data)
  }
}

const getters ={}

export default {
  state,
  mutations,
  actions,
  getters
};