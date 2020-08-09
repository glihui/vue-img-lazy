import Vue from 'vue'
import App from './App.vue'
import imgLazy from './utils/directive/imgLazy.js';

Vue.directive('imgLazy', imgLazy);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
