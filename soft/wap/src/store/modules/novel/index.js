const state ={
  novelInfo: {} // 小说详细信息
}

const mutations ={
  getNovelInfo(state, data) { // 设置小说详细信息
    state.novelInfo = data;
  }
}

const actions ={
  getNovelInfo({commit}, data) { // 获取小说详细信息，提交
    commit('getNovelInfo', data);
  }
}

const getters ={}

export default {
  state,
  mutations,
  actions,
  getters
};