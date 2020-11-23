<template>
    <div v-flex-c-c style="width: 100%;height: auto;">
      <app-header></app-header>
      <app-contant></app-contant>
      <h2 v-main-color-font v-karton-font v-fw300>ВАШ РЕЗУЛЬТАТ</h2>

      <div v-flex-r-c style="width: 100%;height: auto">
        <div v-center
             @mouseover="name1 = !name1"
             @mouseout="name1 = !name1"
             class="name1">
          <img src="/static/animLogo.gif" v-if="name1" alt="">
          <h3 v-font-white v-karton-font>{{ this.names[0] }}</h3>
        </div>
        <div v-center
             @mouseover="name2 = !name2"
             @mouseout="name2 = !name2"
             class="name2">
          <img src="/static/animLogo.gif" v-if="name2" alt="">
          <h3 v-font-white v-karton-font>{{ this.names[1] }}</h3>
        </div>
        <div v-center
             @mouseover="name3 = !name3"
             @mouseout="name3 = !name3"
             class="name3">
          <img src="/static/animLogo.gif" v-if="name3" alt="">
          <h3 v-font-white v-karton-font>{{ this.names[2] }}</h3>
        </div>
      </div>

      <h4 v-karton-font v-main-color-font>Оставьте отзыв</h4>
      <form action="" v-flex-c-c>
        <input type="text" name="name" placeholder="Имя ребенка">
        <input type="text" name="age" placeholder="Возраст ребенка(например 7 месяцев)">
        <textarea name="massage" id="" cols="30" rows="10" placeholder="Ваш отзыв"></textarea>
        <router-link tag="button" to="/reviews"v-karton-font v-fw300>добавить отзыв</router-link>
      </form>

    </div>
</template>

<script>
    import SubHeader from "./components/SubHeader"
    import Contant from "./components/Contant"

    export default {
      data () {
        return {
          names: ['вачик','македон','пульхерия'],
          name1: false,
          name2: false,
          name3: false
        }
      },
      components: {
        appHeader: SubHeader,
        appContant: Contant
      }
    }
</script>

<style scoped>
  h2{
    font-size: 55%;
  }
  .name1{
    background: url("/static/names/name1.png") 100% 100% no-repeat;
    background-size: cover;
    width: 20%;
    height: 12vw;
    margin-left: 16%;
    margin-right: -12%;
    border-radius: 1vw;
  }
  .name2{
    background: url("/static/names/name2.png") 100% 100% no-repeat;
    background-size: cover;
    width: 20%;
    height: 11.6vw;
    margin-left: 16%;
    margin-right: -12%;
    border-radius: 1vw;
  }
  .name3{
    background: url("/static/names/name3.png") 100% 100% no-repeat;
    background-size: cover;
    width: 20%;
    height: 11.6vw;
    margin-left: 16%;
    margin-right: -12%;
    border-radius: 1vw;
  }
  h3{
    font-size: 35%;
    font-weight: 300;
  }
  h4{
    font-size: 35%;
  }
  input{
    width: 68vw;
    height: 3vw;
    background-color: rgba(255, 255, 255,0.8);
    border: 1px solid #e3dcdc;
    border-radius: 0.5vw;
    box-shadow: 0.3vw 0.3vw 5px #dedede;
    font-size: 14%;
    font-family: Roboto;
    color: #7f7d7d;
    outline: none;
    margin-bottom: 1vw;
    padding-left: 1vw;
    caret-color: #4dc1c2;
  }
  input::placeholder{
    font-family: Leftonade;
    padding-left: 2vw;
    color: #427d7e;
  }
  textarea{
    width: 66vw;
    height: 19vw;
    background-color: rgba(255, 255, 255,0.8);
    border: 1px solid #e3dcdc;
    border-radius: 0.5vw;
    box-shadow: 0.3vw 0.3vw 5px #dedede;
    font-size: 14%;
    color: #7f7d7d;
    outline: none;
    padding-left: 3vw;
    padding-top: 0.7vw;
    margin-bottom: 4vw;
    caret-color: #4dc1c2;
    resize: none;
  }
  textarea::placeholder{
    font-family: Leftonade;
    color: #427d7e;
  }
  button{
    width: 30vw;
    height: 3.5vw;
    background: #4dc1c2;
    margin-top: 2vw;
    font-size: 23%;
    color: white;
    border: 2px solid #4dc1c2;
    border-radius: 0.5vw;
    outline: none;
    margin-bottom: 5vw;
  }
  button:hover{
    background: white;
    color: #4dc1c2;
  }
  img{
    width: 6vw;
    height: 6vw;
    opacity: 0.4;
    position: absolute;
    border-radius: 50%;
  }
</style>
