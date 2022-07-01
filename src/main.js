import Vue from 'vue'
import App from './App.vue'

// Import bootstrap
import "bootstrap";

// Importo the main scss
import "./assets/scss/main.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
