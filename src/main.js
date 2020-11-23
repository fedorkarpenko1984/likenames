import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/routes'
import VueScrollTo from 'vue-scrollto'

import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'

Vue.use(VueRouter)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})



import robotoFont from "./Directives/robotoFont"
import fontWhite from "./Directives/fontWhite"
import kartonFont from "./Directives/kartonFont"
import mainColorFont from "./Directives/mainColorFont"
import mainColorBG from "./Directives/mainColorBG"
import mainColorBorder from "./Directives/mainColorBorder"
import noneRightBorder from "./Directives/noneRightBorder"
import leftonadeFont from "./Directives/leftonadeFont"
import greyColorFont from "./Directives/greyColorFont"
import fw300 from "./Directives/fw300"
import fontFooterColor from "./Directives/fontFooterColor"
import flexCC from "./Directives/flexCC"
import flexRC from "./Directives/flexRC"
import center from "./Directives/center"
import SubBlueFont from "./Directives/SubBlueFont"

import store from './store/index'


Vue.config.productionTip = false

Vue.directive('robotoFont', robotoFont)
Vue.directive('leftonadeFont', leftonadeFont)
Vue.directive('kartonFont', kartonFont)
Vue.directive('fw300', fw300)
Vue.directive('mainColorFont', mainColorFont)
Vue.directive('greyColorFont', greyColorFont)
Vue.directive('mainColorBG', mainColorBG)
Vue.directive('mainColorBorder', mainColorBorder)
Vue.directive('noneRightBorder', noneRightBorder)
Vue.directive('fontWhite', fontWhite)
Vue.directive('SubBlueFont', SubBlueFont)
Vue.directive('fontFooterColor', fontFooterColor)
Vue.directive('flexCC', flexCC)
Vue.directive('flexRC', flexRC)
Vue.directive('center', center)

firebase.initializeApp({
  apiKey: "AIzaSyA2IJQKxxhY32Ap-Y5YKL0WJr7oAFz7T08",
  authDomain: "likenames-8fa65.firebaseapp.com",
  databaseURL: "https://likenames-8fa65.firebaseio.com",
  projectId: "likenames-8fa65",
  storageBucket: "likenames-8fa65.appspot.com",
  messagingSenderId: "950066256608",
  appId: "1:950066256608:web:af9fe65590a4a9c2efce85",
  measurementId: "G-DNZF6XX4BQ"
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
