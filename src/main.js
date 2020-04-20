import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Chart from 'primevue/chart'
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)
Vue.config.productionTip = false
Vue.component('Chart', Chart)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
