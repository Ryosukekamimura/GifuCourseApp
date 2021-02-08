// import VuexPersistence from "vuex-persist";
//
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
//
// const state = {
//   counter: 0
// }
//
// const mutations = {
//   // increment(state) {
//   //   state.counter++
//   // },
//   // changeMessage(state, message){
//   //   state.message = message
//   // }
//   RESTORE_MUTATION: {
//     increment: function(state) {
//       state.counter++
//     }
//   }
// }
//
// export const store = {
//   state: state,
//   mutations: mutations,
//   plugins: [vuexLocal.plugin]
// }

import createPersistedState from "vuex-persistedstate";
import localStorage from "~/src/plugins/localStorage";

export const state = () => ({
  count: 0,
  message: 'Hello World!'
})

export const mutations = {
  increment(state) {
    state.count++
  }
}














