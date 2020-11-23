<template>
    <div class="content">

      <img src="/static/animLogo.gif" alt="">
      <h1 v-fw300 v-karton-font v-main-color-font>LIKE NAMES</h1>
      <h2 v-fw300 v-grey-color-font v-leftonade-font>Идеальное имя для вашего ребенка</h2>
      <h3 v-fw300 v-grey-color-font v-roboto-font>С помощью нашего сервиса подберите имя для вашего<br>ребенка, которое сформирует его характер</h3>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 35vw;
  }
  img{
    width: 10vw;
    height: 10vw;
    margin-top: 2vw;
  }
  h1{
    font-size: 72%;
    margin-top: 1vw;
  }
  h2{
    font-size: 25%;
    margin-top: -3vw;
  }
  h3{
    font-size: 16%;
    text-align: center;
    margin-top: -0.5vw;
  }

</style>
