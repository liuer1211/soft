const state ={
  isStick: true, // 英雄帖显隐
  isDream: false, // 逐梦令显隐
  isLoading: false, // loading
}

const mutations ={
  getStick(state,data) {
    state.isStick = data;
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