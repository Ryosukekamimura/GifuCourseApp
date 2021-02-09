import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b7bc787 = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _3ee2d17a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5a02dd10 = () => interopDefault(import('../pages/ranking.vue' /* webpackChunkName: "pages/ranking" */))
const _22fa3272 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _4633d83d = () => interopDefault(import('../pages/courses/_id.vue' /* webpackChunkName: "pages/courses/_id" */))
const _16e6f42c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _1b7bc787,
    name: "account"
  }, {
    path: "/login",
    component: _3ee2d17a,
    name: "login"
  }, {
    path: "/ranking",
    component: _5a02dd10,
    name: "ranking"
  }, {
    path: "/todos",
    component: _22fa3272,
    name: "todos"
  }, {
    path: "/courses/:id?",
    component: _4633d83d,
    name: "courses-id"
  }, {
    path: "/",
    component: _16e6f42c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
