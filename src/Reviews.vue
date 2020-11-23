<template>
  <div v-flex-c-c style="height: auto;padding-bottom: 4vw">
    <app-header></app-header>
    <app-contant></app-contant>
    <h1 @click="console.log(this.$store.state.posts[0].name)" v-main-color-font v-karton-font v-fw300>ОТЗЫВЫ</h1>
    <post
      name = 'Джамал'
      age = '7'
      review="влялась, ведь именно те имена, что предложили
            Вы, я тоже рассматривала для наречения дочери! Сняли камень с души. Не зря я
            сомневалась в правильности своегоСпасибо огромное!!!! Читала и удивлялась, ведь именно те имена, что предложили
            Вы, я тоже рассматривала для наречения дочери! Сняли камень с души. Не зря я
            сомневалась в правильности своего"
    ></post>
    <post
      name="Мойша"
      age="7"
    ></post>
    <post></post>
    <post></post>
    <post></post>
  </div>
</template>

<script>
  import Post from "./components/Post"
  import SubHeader from "./components/SubHeader"
  import Contant from "./components/Contant"


    export default {
      components: {
        appHeader: SubHeader,
        appContant: Contant,
        post: Post
      }
    }
</script>

<style scoped>
  h1{
    font-size: 60%;
  }
</style>
