<template>
    <div v-flex-c-c class="mainbox" style="height: auto">
      <h2 v-karton-font v-grey-color-font v-fw300 id="about">ABOUT</h2>
      <p v-roboto-font v-grey-color-font>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        A adipisci, at consectetur cumque deserunt eligendi eveniet illum, incidunt numquam
        perferendis ullam vel voluptatem voluptatum? Corporis cupiditate maiores optio porro tempora?<br><br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea saepe voluptatem.
        Adipisci asperiores, consequuntur ex fugiat fugit laboriosam magnam
        minus nisi officia quae quasi sequi sint sunt veniam voluptatem?</p>

      <div class="counter">
        <div class="counterBox">
          <div class="counterFrame">
            <h3>{{ CFrames[0] }}</h3>
          </div>
          <div class="counterFrame">
            <h3>{{ CFrames[1] }}</h3>
          </div>
          <div class="counterFrame">
            <h3>{{ CFrames[2] }}</h3>
          </div>
          <div class="counterFrame">
            <h3>{{ CFrames[3] }}</h3>
          </div>
          <div class="counterFrame">
            <h3>{{ CFrames[4] }}</h3>
          </div>
          <div class="counterFrame">
            <h3>{{ CFrames[5] }}</h3>
          </div>
        </div>

        <h4 v-font-white v-roboto-font v-fw300>выбраных имен</h4>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          CFrames: ['0','0','0','0','1','2']
        }
      }
    }
</script>

<style scoped>
  h2{
    font-size: 50%;
    color: #7f7d7d;
    text-align: center;
    margin-top: 2vw;
  }
  p{
    font-size: 15%;
    margin-left: 20vw;
    margin-right: 20vw;
  }
  .counter{
    display: block;
    background: url("/static/counter.png") 100% 100% no-repeat;
    background-size: cover;
    width: 57.6vw;
    height: 25vw;
    position: relative;
    margin-top: 5vw;
    margin-bottom: 7vw;
  }
  .counterBox{
    display: flex;
    flex-direction: row;
    margin-top: 7vw;
    margin-left: 13vw;
  }
  .counterFrame{
    width: 4vw;
    height: 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: azure;
    border-style: solid;
    border-color: #cccaca;
    border-width: 1px;
    border-radius: 0.5vw;
    box-shadow: 3px 3px 5px grey;
    margin-left: 1vw;
  }
  h3{
    font-family: Karton2;
    color: #427d7e;
    font-size: 60%;
  }
  h4{
    font-size: 36%;
    margin-top: 1vw;
    margin-left: 15.8vw;
  }
</style>
