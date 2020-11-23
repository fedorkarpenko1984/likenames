<template>
  <div class="startScreen">
    <app-header></app-header>
    <app-contant></app-contant>
    <a class="btn"
       href="#"
       v-scroll-to="'#start'"
       v-roboto-font
       v-center
       v-main-color-border>НАЧАТЬ</a>
    <img src="/static/kriv1.png" id="start" style="width: 100%;height: 8vw" alt="">

      <div class="chooseBox" v-if="!show1">
        <h1 v-fw300 v-font-white v-karton-font>ВЫБЕРИТЕ ПОЛ РЕБЕНКА</h1>

        <div class="buttonBlock">
          <button v-roboto-font v-fw300 @click="show1 = !show1">Мальчик</button>
          <button v-roboto-font v-fw300 @click="show1 = !show1">Девочка</button>
        </div>
      </div>

      <div class="chooseBox" v-if="show1">
        <app-property></app-property>
      </div>


    <img src="/static/kriv2.png" style="width: 100%;height: 8.2vw" alt="">
    <auCount></auCount>
    <img src="/static/kriv3.png" style="width: 100%; height: 4.95vw;margin-top: 5vws" alt="">
    <slider id="slider"></slider>

  </div>
</template>

<script>
  import Property from "./components/Property"
  import AboutUs_Counter from "./components/AboutUs_Counter"
  import Slider from "./components/Slider"
  import Header from "./components/Header"
  import Contant from "./components/Contant"


    export default {
      data () {
        return {
          show1: false
        }
      },
      methods: {
        toStart () {
        }
      },
      components: {
        appHeader: Header,
        appContant: Contant,
        appProperty: Property,
        auCount: AboutUs_Counter,
        slider: Slider
      }
    }
</script>

<style scoped>
  .startScreen{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .chooseBox{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4dc1c2;
  }
  .buttonBlock{
    height: 23vw;
  }
  a{
    text-decoration: none;
  }
  button{
    width: 20vw;
    height: 4vw;
    font-size: 26%;
    background-color: white;
    border-radius: 0.7vw;
    border-style: none;
    color: #4dc1c2;
    outline: none;
    transition-property: color,background-color;
    transition-duration: 0.5s;
  }
  button:hover{
    color: white;
    background-color: #2e9192;
    transition-property: color,background-color;
    transition-duration: 0.5s;
  }
  h1{
    margin-top: 11.5vw;
    font-size: 48%;
    letter-spacing: 0.01rem;
    margin-bottom: -2vw;
  }
  .btn{
    width: 20vw;
    height: 4vw;
    background: white;
    color: #4dc1c2;
    font-size: 27%;
    margin-top: 1vw;
    outline: none;
    transition-property: color,background-color;
    transition-duration: 0.4s;
  }
  .btn:hover{
    color: white;
    background: #4dc1c2;
    transition-property: color,background-color;
    transition-duration: 0.4s;
  }
</style>
