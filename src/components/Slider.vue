<template>
    <div class="mainbox" v-flex-c-c >
      <h1 v-karton-font v-main-color-font>ОТЗЫВЫ</h1>
      <transition
        name="slider"
        mode="out-in"
      >
        <review-block
          key="slide1"
          v-if="this.el1"
          img1="/static/photos/photo1.jpg"
          img2="/static/photos/photo2.jpg"
          img3="/static/photos/photo3.jpg"
          name1="Ариночка, 5 месяцев" name2="Афанасий, 12 месяцев" name3="Антонина, 7 месяцев"
          text1="Спасибо огромное!!!! Читала и удивлялась, ведь именно те имена, что предложили Вы,
          я тоже рассматривала для наречения дочери! Сняли камень с души. Не зря я сомневалась в
          правильности своего выбора."
          text2="Благодарим за прекрасный подбор имён и разъяснения вариантов. Вы развеяли наши некоторые
          заблуждения и предложили красивые и интересные варианты."
          text3="Имя, которое вы подобрали, для нас самих было несколько неожиданным. Мы его никогда не
          рассматривали в качестве варианта. А вот сейчас, трудно даже представить, чтобы нашего
          ребёнка звали как-то по-другому."
        ></review-block>

        <review-block
          key="slide2"
          v-if="this.el2"
          img1="/static/photos/photo1.jpg"
          img2="/static/photos/photo2.jpg"
          img3="/static/photos/photo3.jpg"
          name1="вАСЯ" name2="коля" name3="Жора"
          text1="КАРАБАРА"
          text2="КАРАБАРА"
          text3="КАРАБАРА"
        ></review-block>

        <review-block
          key="slide3"
          v-if="this.el3"
          img1="/static/photos/photo3.jpg"
          img2="/static/photos/photo2.jpg"
          img3="/static/photos/photo1.jpg"
          name1="вАСЯ" name2="коля" name3="Сара"
          text1="КАРАБАРА"
          text2="КАРАБАРА"
          text3="КАРАБАРА"
        ></review-block>
      </transition>

      <div class="indicator" v-flex-r-c style="width: 5vw;justify-content: space-between;margin-top: 2vw;margin-bottom: 3vw;">
        <div class="circle" v-if="!el1"></div>
        <div class="circleBlue" v-if="el1"></div>
        <div class="circle" v-if="!el2"></div>
        <div class="circleBlue"v-if="el2"></div>
        <div class="circle" v-if="!el3"></div>
        <div class="circleBlue" v-if="el3"></div>
      </div>
      <button @click="toReviews" v-roboto-font>ВСЕ ОТЗЫВЫ</button>

    </div>
</template>

<script>

    import ReviewBlock from "./ReviewBlock";

    export default {
      data () {
        return {
          el1: true,
          el2: false,
          el3: false,
          ind: 1
        }
        }
      ,
      components: {
        reviewBlock: ReviewBlock
      },
      methods: {
        toReviews () {
          this.$router.push('/reviews')
        }
      },
      mounted () {

       setInterval(() => {
         if (this.ind == 1) {
           this.el1 = false
           this.el2 = true
           this.ind = 2

         } else {
           if (this.ind == 2) {
             this.el2 = false
             this.el3 = true
             this.ind = 3
           } else {
             if (this.ind == 3) {
               this.el3 = false
               this.el1 = true
               this.ind = 1
             }
           }
         }
       },7000)
      }
    }



</script>

<style scoped>
  .mainbox{
    width: 100%;
    height: 62vw;
    position: relative;
    background-color: #E3F6F4;
  }
  h1{
    margin-top: 5vw;
    font-size: 45%;
  }
  button{
    width: 20vw;
    height: 4vw;
    color: white;
    font-size: 18%;
    background-color: #4dc1c2;
    border: 2px solid #4dc1c2;
    border-radius: 0.4vw;
    transition-property: color,background-color;
    transition-duration: 0.7s;
    outline: none;
  }
  button:hover{
    color: #4dc1c2;
    background-color: white;
    transition-property: color,background-color;
    transition-duration: 0.7s;
  }
  .circle{
    width: 1vw;
    height: 1vw;
    background: white;
    border-radius: 50%;

  }
  .circleBlue{
    width: 1vw;
    height: 1vw;
    background: #2e9192;
    border-radius: 50%;
  }



  .slider-enter {
    opacity: 0;
  }
  .slider-enter-active {
    transition: opacity 1.5s;
  }
  .slider-enter-to {}
  .slider-leave {}
  .slider-leave-active {
    animation: 2s slider-slide forwards;
    transition: opacity 2s;
  }
  .slider-leave-to {
    opacity: 0;
  }

  @keyframes slider-slide {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-100vw);
    }
  }


</style>
