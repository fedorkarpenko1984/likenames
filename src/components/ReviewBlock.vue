<template>
    <div class="mainbox" style="width: 100%;height: 36vw">
      <div class="box" v-flex-r-c style="justify-content: space-between;width: 80%;height: 100%;margin-left: 10vw;">
        <div class="review" v-flex-c-c>
          <img :src=img1 alt="">

          <h3>{{ name1 }}</h3>
          <p>{{ text1 }}</p>
        </div>
        <div class="review" v-flex-c-c>
          <img :src=img2 alt="">
          <h3>{{ name2 }}</h3>
          <p>{{ text2 }}</p>
        </div>
        <div class="review" v-flex-c-c>
          <img :src=img3 alt="">
          <h3>{{ name3 }}</h3>
          <p>{{ text3 }}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props: ['img1','img2','img3','name1','name2','name3','text1','text2','text3']
    }
</script>

<style scoped>
  .review{
    width: 24vw;
    height: 100%;
  }
  img{
    width: 11vw;
    height: 11vw;
    border: 1px solid #4dc1c2;
    border-radius: 50%;
    margin-top: 2vw;
  }
  h3{
    font-family: Roboto;
    font-size: 15%;
    color: #7f7d7d;
    text-decoration: underline #4dc1c2;
  }
  p{
    font-family: Roboto;
    font-size: 12%;
    color: #708b8b;
    padding-left: 1.6vw;
    padding-right: 1.6vw;
    text-align: justify;

  }
</style>
