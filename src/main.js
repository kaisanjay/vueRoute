// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HelloWorld from "./components/HelloWorld"
import About from "./components/About"
import Contact from "./components/Contact"
import Param from "./components/Param"
import paramdetails from './components/paramdetails'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: HelloWorld },
	{ path: '/about', component: About},
	{ path: '/contact', component: Contact},
	{ path: '/Param', component: Param},
	{ path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails' }
]


const router = new VueRouter({
	routes,
	mode: 'history'
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
  
/* checking brach feature of git*/