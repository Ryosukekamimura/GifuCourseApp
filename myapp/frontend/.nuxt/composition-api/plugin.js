if (process.client) {
  // Necessary polyfill for Composition API support for IE11
  require('core-js/features/reflect/own-keys')
}

import { globalPlugin } from '@nuxtjs/composition-api'

export default globalPlugin
