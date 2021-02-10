import createPersistedState from "vuex-persistedstate";
import localStorage from "~/src/plugins/localStorage";

export const state = () => ({
  count: 0,
  message: 'Hello World!',
  isLogin: false,
})

export const mutations = {
  increment(state) {
    state.count++
  },
  changeMessage(state, message){
    state.message = message
  },
  changeLogin(state){
    if (state.isLogin){
      console.log('ログアウトしました')
      state.isLogin = false
    }else{
      console.log('ログインしました')
      state.isLogin = true
    }
  }
}














