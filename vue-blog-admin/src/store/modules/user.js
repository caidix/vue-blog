import router from '@/router'
import api from '@/api/user'
const state = {
  token: '',
  username: '',
  avatar: '',
  introduce: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
  SET_INTRODUCTION: (state, introduce) => {
    state.introduce = introduce
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login: ({ commit }, userInfo) => {
    const { username, password } = userInfo;
    return api.login({ username: username.trim(), password }).then(({ data }) => {
      if (data.code === 0) {
        console.log(data)
        localStorage.token = data.data.token;
        commit('SET_TOKEN', data.data.token);
      }
      return data;
    });
  },
  getUserInfo: ({ commit, state }) => {
    return api.findOne().then(({ data }) => {
      if (data.code === 0) {
        console.log(data)
        commit('SET_USERNAME', data.data.username);
        commit('SET_AVATAR', data.data.avatar);
        commit('SET_INTRODUCTION', data.data.introduce);
      }
      return data;
    })
  },
  loginOut: ({ commit }) => {
    commit('SET_TOKEN', '')
  }
}

export default {
  namespaced: true, // 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
  state,
  mutations,
  actions
}