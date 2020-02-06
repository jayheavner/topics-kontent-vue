import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

import './main.css';

Vue.config.productionTip = false;

import dotenv from 'dotenv';
dotenv.config();

import Topic from './pages/Topic.vue';

Vue.use(Router);
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach(function(to, from, next) {
  //debugger;
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
