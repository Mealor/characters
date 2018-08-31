import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Characters';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:page',
      name: 'home',
      component: Home,
    },
    {
      path: '/details/:index',
      name: 'details',
      component: () => import('./pages/Character'),
    },
  ],
});
