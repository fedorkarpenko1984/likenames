<template>
    <div v-flex-r-c class="footer">
      <div v-center style="width: 4%;height: 4vw;border-radius: 50%;background-color: #4dc1c2;margin-left: 8%;margin-right: 1%;">
        <img style="width: 2vw;height: 2vw" src="/static/email.png" alt="">
      </div>

      <div v-flex-r-c style="width: 64%">
        <h3 v-roboto-font v-font-white v-fw300>likenames@mail.com</h3>
      </div>

      <div v-flex-r-c style="width: 15%;height: 4vw;">
        <a v-center href="">
          <div class="image1"></div>
        </a>
        <a v-center href="">
          <div class="image2"></div>
        </a>
        <a v-center href="">
          <div class="image3"></div>
        </a>
      </div>

      <h5 v-sub-blue-font v-roboto-font>© Likenames 2020</h5>
    </div>

</template>

<script>
    export default {

    }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 11vw;
    background-color: #2e9192;
    position: relative;
  }
  .image1{
    display: block;
    width: 2vw;
    height: 2vw;
    background: url("/static/vk.png");
    background-size: cover;
  }
  .image2{
    display: block;
    width: 2vw;
    height: 2vw;
    background: url("/static/ok.png");
    background-size: cover;
  }
  .image3{
    display: block;
    width: 2vw;
    height: 2vw;
    background: url("/static/inst.png");
    background-size: cover;
  }
  h3{
    font-size: 18%;
  }
  h5{
    font-size: 8%;
    position: absolute;
    top: 8.5vw;
    margin-bottom: -1vw;
    width: 100%;
    text-align: center;
  }
  a{
    width: 4vw;
    height: 4vw;
    background-color: #4dc1c2;
    border-radius: 50%;
    margin-right: 1vw;
  }
  a:hover{
    background-color: #276f6f;
  }

</style>
