<template>
  <header>
    <div class="brandBox">
      <router-link to="/" tag="a" class="logo"></router-link>
      <router-link tag="a" class="logoText" to="/" v-karton-font v-main-color-font>LikeNames</router-link>
    </div>
    <div class="menu">
      <router-link v-roboto-font to="/" tag="a" class="punktMenu">ГЛАВНАЯ</router-link>
      <router-link tag="a" v-roboto-font :to="{name: 'Home', hash: '#slider'}" class="punktMenu">ОТЗЫВЫ</router-link>
      <router-link tag="a" v-roboto-font :to="{name: 'Home',hash: '#about'}" class="punktMenu">ABOUT</router-link>
      <router-link v-fw300 tag="a" v-roboto-font to="/mynames" class="punktMenuRight">MY NAMES</router-link>

    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  header{
    width: 100%;
    height: 6vw;
    display: flex;
    flex-direction: row;
  }
  .logoText {
    font-size: 36%;
    margin-top: 2vw;
    text-decoration: none;
    font-weight: 500;
  }
  .logo{
    width: 2.5vw;
    height: 2.5vw;
    margin: 1vw;
    margin-top: 2.8vw;
    background: url("/static/logo.png") 100% 100% no-repeat;
    background-size: cover;
  }
  .brandBox{
    display: flex;
    flex-direction: row;
    width: 71vw;
    height: 6vw;
  }

  .menu{
    width: auto;
    height: 3vw;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    margin-top: 3vw;
  }
  .punktMenu{
    width: auto;
    height: 1.6vw;
    text-decoration: none;
    color: #4dc1c2;
    border-right: 1px solid #4dc1c2;
    border-left: 1px solid rgba(255, 255, 255, 0);
    margin-left: -1px;
    font-size: 14%;
    padding-left: 0.4vw;
    padding-right: 0.4vw;
    position: relative;
    z-index: 2000;
    transition-property: color,background-color;
    transition-duration: 0.5s;
    font-weight: 300;
  }
  .punktMenuRight{
    width: auto;
    height: 1.6vw;
    text-decoration: none;
    color: #4dc1c2;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-left: -1px;
    padding-left: 0.4vw;
    padding-right: 0.4vw;
    font-size: 14%;
    background: white;
    position: relative;
    z-index: 1000;
    transition-property: color,background-color;
    transition-duration: 0.5s;
  }
  .punktMenu:hover{
    height: 2vw;
    border-color: #4dc1c2;
    color: white;
    border-radius: 0.3vw;
    background: #4dc1c2;
    transition-property: color,background-color;
    transition-duration: 0.5s;
    padding-top: 0.5vw;
  }
  .punktMenuRight:hover{
    height: 2vw;
    border-color: #4dc1c2;
    color: white;
    border-radius: 0.3vw;
    background: #4dc1c2;
    transition-property: color,background-color;
    transition-duration: 0.5s;
    padding-top: 0.5vw;
  }

</style>
