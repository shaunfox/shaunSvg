import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import '@/components/SvgIcon/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
