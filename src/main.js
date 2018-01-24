// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueScrollReveal from 'vue-scroll-reveal'
 

Vue.use(Element)
Vue.use(VueScrollReveal)

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
