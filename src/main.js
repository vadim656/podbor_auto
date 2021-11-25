import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory  } from 'vue-router'

// ROUTES
import Home from './views/Home.vue'
import About from './views/About.vue'
import Prices from './views/Prices.vue'
// ROUTER CONFIG
const router = createRouter({
  history: createWebHistory (),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/prices', component: Prices, name: 'Prices' },
  ]
})

// TAILWIND CSS
import './index.css'

// APP
createApp(App)
  .use(router)
  .mount('#app')
