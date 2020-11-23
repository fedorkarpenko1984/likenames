<template>
    <div class="post" v-flex-r-c>
      <div v-flex-c-c style="height: auto;width: 20vw;">
        <img src="/static/photos/photo1.jpg" alt="" class="photo">

      </div>


      <div style="padding-left: 2vw;padding-right: 3vw;height: auto">
          <h3 v-grey-color-font v-fw300>{{ name }}, {{ age }} месяцев</h3>
          <p v-roboto-font>{{ review }}</p>
      </div>

    </div>
</template>

<script>
    export default {
      props: ['name','age','review']
    }
</script>

<style scoped>
  .post{
    width: 80%;
    height: auto;
    border-radius: 1vw;
    background-color: #e3f6f4;
    margin-bottom: 2vw;
  }
  .photo{
    width: 12vw;
    height: 12vw;
    border: 2px groove #4dc1c2;
    border-radius: 50%;
    margin: 3vw;
    margin-right: 2vw;
  }
  h3{
    font-size: 18%;
    font-family: Leftonade;
    text-decoration: underline;
    text-align: left;
    margin-top: 4.5vw;
  }
  p{
    font-size: 13%;
    color: #708b8b;
    text-align: left;
    margin-top: -0.5vw;
    margin-bottom: 4vw;
  }
</style>
