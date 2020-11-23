import Vue from 'vue'
import Router from 'vue-router'
import Home from "../Home"
import Forma from "../Forma"
import Names from "../Names"
import Reviews from "../Reviews"
import StartForm from "../StartForm"
import Slider from "../components/Slider"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Home,
      name: 'Home'

    },
    {
      path: '/forma',
      component: Forma
    },
    {
      path: '/names',
      component: Names
    },
    {
      path: '/reviews',
      component: Reviews
    },
    {
      path: '/reviews',
      component: Reviews
    },
    {
      path: '/mynames',
      component: StartForm
    }

  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})
