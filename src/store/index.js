import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    propsCounter: 0,
    posts: [
      {
        name: 'Aриночка',age: '7',
        review: 'Спасибо огромное!!!! Читала и удивлялась, ведь именно те имена, что предложили Вы, ' +
          'я тоже рассматривала для наречения дочери! Сняли камень с души. Не зря я ' +
          'сомневалась в правильности своего выбора.\n' +
          '\n'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
