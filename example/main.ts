import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import routes from 'pages-generated'
import App from './App.vue'
import Counter from './Counter.vue'

import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(head)
app.use(router)
app.component('Counter', Counter)

app.mount('#app')
