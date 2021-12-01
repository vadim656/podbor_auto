import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// ROUTES
import Home from './views/Home.vue'
import About from './views/About.vue'
import Prices from './views/Prices.vue'
import Services from './views/Services.vue'

// ROUTER CONFIG
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
      //Or for Vue 3:
      //return {el: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/prices', component: Prices, name: 'Prices' },
    { path: '/services', component: Services, name: 'Services' }
  ]
})

// TAILWIND CSS
import './index.css'

// APP
const app = createApp(App)

app.use(router)
app.mount('#app')
