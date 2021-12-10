import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueScrollTo from 'vue-scrollto'

// ROUTES
import Home from './views/Home.vue'
import About from './views/About.vue'
import Prices from './views/Prices.vue'
import Services from './views/Services.vue'

// ROUTER CONFIG
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/prices', component: Prices, name: 'Prices' },
    { path: '/services', component: Services, name: 'Services' }
  ],
})

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 400);
  next();
})




// TAILWIND CSS
import './index.css'

// APP
const app = createApp(App)

app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
app.use(router)
app.mount('#app')
