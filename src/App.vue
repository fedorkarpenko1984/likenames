<template>
  <div id="app">

    <router-view></router-view>
    <app-footer id="footer"></app-footer>
  </div>
</template>

<script>
  import Contant from "./components/Contant"
  import Footer from "./components/Footer";

export default {
    components: {
      appFooter: Footer
    }
}
</script>

<style>
  @media (min-width: 641px) {
    #app{
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background: url("/static/bgDT.jpg") 100% 100% no-repeat;
      background-size: cover;
    }
  }
  @media (max-width: 640px) {
    #app{
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
  }

</style>
