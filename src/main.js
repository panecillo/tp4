import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueForm from 'vue-form'

import Formulario from './components/Formulario.vue';
import Usuarios from './components/Usuarios.vue';

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

var options = {
  validators: {
    'no-espacios': function(value) {
      return value.indexOf(' ') < 0
    }
  }
}
Vue.use(VueForm, options)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/formulario', component: Formulario},
    {path: '/usuarios', component: Usuarios}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
