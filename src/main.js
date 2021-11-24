import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// ROUTES
import Home from './views/Home.vue'
import About from './views/About.vue'
// ROUTER CONFIG
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' }
  ]
})

// TAILWIND CSS
import './index.css'

// APP
createApp(App)
  .use(router)
  .mount('#app')
