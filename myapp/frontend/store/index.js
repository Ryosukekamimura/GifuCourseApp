import createPersistedState from "vuex-persistedstate";
import localStorage from "~/src/plugins/localStorage";

export const state = () => ({
  isLogin: false,
  displayName: "",
})

export const mutations = {
  updateLogin(state, displayName){
    updateDisplayName(state, displayName)
    login(state)
  },
  updateLogout(state){
    updateDisplayName(state, "")
    logout(state)
    console.log(state.isLogin)
  }
}
// displayNameの更新
function updateDisplayName(state, displayName){
  state.displayName = displayName
}

function login(state){
  state.isLogin = true
}

function logout(state){
  state.isLogin = false
}















