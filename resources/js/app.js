

require('./bootstrap');

/* window.Vue = require('vue'); */

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Router import
import {routes} from './routes';

//import User Class

import User from './Helpers/User';
window.User = User;


 // Import Notification Class
 import Notification from './Helpers/Notification';
 window.Notification = Notification

// import sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;

/*---------------- end sweetalert2-------------------------- */



const router = new VueRouter({
    routes, mode: 'history'
  })



const app = new Vue({
    el: '#app',
    router
});
