const state ={
  novelInfo: {}, // 小说详细信息
  novelTypeList: [], // 小说分类
  novelPeopleList: [], // 人物
  novelSectList: [], // 门派
  novelKungfuList: [], // 功夫
  novelWeaponList: [], // 兵器
  novelFatalismList: [], // 宿命
  novelOtherList: [],  // 诗词歌赋
}

const mutations ={
  getNovelInfo(state, data) { // 设置小说详细信息
    state.novelInfo = data;
  },
  getNovelTypeList(state, data) { // 设置小说详细信息
    state.novelTypeList = data;
  },
  getNovelPeopleList(state, data) { // 人物列表
    state.novelPeopleList = data;
  },
  getNovelSectList(state, data) { // 门派列表
    state.novelSectList = data;
  },
  getNovelKungfuList(state, data) { // 功夫列表
    state.novelKungfuList = data;
  },
  getNovelWeaponList(state, data) {  // 兵器
    state.novelWeaponList = data;
  },
  getNovelFatalismList(state, data) {  //  宿命
    state.novelFatalismList = data;
  },
  getNovelOtherList(state, data) {  //  诗词歌赋
    state.novelOtherList = data;
  }
}

const actions ={
  getNovelInfo({commit}, data) { // 获取小说详细信息，提交
    commit('getNovelInfo', data);
  },
  getNovelTypeList({commit}, data) { // 获取小说详细信息，提交
    commit('getNovelTypeList', data);
  },
  getNovelPeopleList({commit}, data) { // 人物列表
    commit('getNovelPeopleList', data);
  },
  getNovelSectList({commit}, data) { // 门派列表
    commit('getNovelSectList', data);
  },
  getNovelKungfuList({commit}, data) { // 功夫列表
    commit('getNovelKungfuList', data);
  },
  getNovelWeaponList({commit}, data) {  // 兵器
    commit('getNovelWeaponList', data);
  },
  getNovelFatalismList({commit}, data) {  // 宿命
    commit('getNovelFatalismList', data);
  },
  getNovelOtherList({commit}, data) {  // 诗词歌赋
    commit('getNovelOtherList', data);
  }
}

const getters ={}

export default {
  state,
  mutations,
  actions,
  getters
};