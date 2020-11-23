<template>
  <div v-flex-c-c style="width: 100%;height: 82vw">
    <app-header></app-header>
    <app-contant></app-contant>
    <form v-flex-c-c action="">
      <h2 v-font-white v-karton-font>Ведите контактные данные</h2>
      <input type="text" placeholder="Ваше имя">
      <input type="text" placeholder="Ваш телефон">
      <input type="text" placeholder="Ваш e-mail">
      <label for=""
             v-flex-r-c
             v-roboto-font v-font-white>
        <img v-if="!customCheckbox" @click="changeCheckbox()" src="/static/logo.png" alt="">
        <div @click="changeCheckbox()" v-if="customCheckbox" class="checkbox"></div>Согласие на обработку персональных данных</label>
      <router-link v-karton-font to="/names" tag="button">Начать</router-link>

    </form>
  </div>
</template>

<script>
  import SubHeader from "./components/SubHeader";
  import Contant from "./components/Contant";

  export default {
    data () {
      return {
        customCheckbox: true
      }
    },
    methods: {
      changeCheckbox () {
        this.customCheckbox = !this.customCheckbox

      }
    },
  components: {
    appHeader: SubHeader,
      appContant: Contant
  }

  }
</script>

<style scoped>
  form{
    width: 46%;
    height: 34vw;
    background: #4dc1c2;
    border-radius: 2vw;
  }
  h2{
    font-size: 32%;
    margin-top: 3.7vw;
  }
  input{
    width: 33vw;
    height: 3vw;
    outline: none;
    border-radius: 0.7vw;
    border-style: none;
    margin-bottom: 1vw;
    padding-left: 2vw;
    font-family: Leftonade;
    color: #4dc1c2;
    font-size: 15%;
    caret-color: #4dc1c2;
  }
  input::placeholder{
    padding-left: vw;
    font-family: Roboto;
    font-weight: 200;
    font-size: 90%;
    color: #4dc1c2;

  }
  label{
    font-size: 12%;
    width: 35vw;
    text-align: left;
  }
  .checkbox{
    width: 1vw;
    height: 1vw;
    border: 1px solid #276f6f;
    margin: 0;
    margin-top: vw;
    margin-right: 0.5vw;
    background-color: white;
  }
  img{
    width: 1vw;
    height: 1vw;
    border: 1px solid #276f6f;
    margin: 0;
    margin-top: vw;
    margin-right: 0.5vw;
    background-color: white;

  }
  button{
    width: 35vw;
    height: 3.5vw;
    background: #2e9192;
    margin-top: 1.5vw;
    font-size: 23%;
    border-radius: 0.7vw;
    border-style: none;
    color: white;
    outline: none;
    transition-property: color,background-color;
    transition-duration: 0.5s;
  }
  button:hover{
    background: white;
    color: #4dc1c2;
    transition-property: color,background-color;
    transition-duration: 0.5s;
  }
</style>
