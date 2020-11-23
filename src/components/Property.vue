<template>
  <div class="mainBox" v-flex-c-c>
    <h2 v-font-white v-karton-font>ВЫБЕРИТЕ КАЧЕСТВА</h2>
    <h3 v-fw300 v-font-white v-roboto-font>Вы можете выбрать до 5 качеств личности</h3>
    <div class="properties">

      <div class="property">
        <img v-if="!hoverKey[0]" @mouseover="hoverKeyChange(0)" src="/static/icons_simple/icon11.png" alt="">
        <img v-if="hoverKey[0]" @click="characterPropsChange(0)" @mouseout="activeHover(0)" src="/static/icons_active/icon12.png" alt="">
        <h5 v-if="!hoverKey[0]" @mouseover="hoverKeyChange(0)" v-font-white v-fw300>АКТИВНЫЙ</h5>
        <h5 v-if="hoverKey[0]"  @click="characterPropsChange(0)" @mouseout="activeHover(0)" v-font-footer-color v-fw300>АКТИВНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[1]" @mouseover="hoverKeyChange(1)" src="/static/icons_simple/icon21.png" alt="">
        <img v-if="hoverKey[1]" @click="characterPropsChange(1)" @mouseout="activeHover(1)" src="/static/icons_active/icon122.png" alt="">
        <h5 v-if="!hoverKey[1]" @mouseover="hoverKeyChange(1)" v-font-white v-fw300>ЧЕСТНЫЙ</h5>
        <h5 v-if="hoverKey[1]"  @click="characterPropsChange(1)" @mouseout="activeHover(1)" v-font-footer-color v-fw300>ЧЕСТНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[2]" @mouseover="hoverKeyChange(2)" src="/static/icons_simple/icon31.png" alt="">
        <img v-if="hoverKey[2]" @click="characterPropsChange(2)" @mouseout="activeHover(2)" src="/static/icons_active/icon32.png" alt="">
        <h5 v-if="!hoverKey[2]" @mouseover="hoverKeyChange(2)" v-font-white v-fw300>КРЕАТИВНЫЙ</h5>
        <h5 v-if="hoverKey[2]"  @click="characterPropsChange(2)" @mouseout="activeHover(2)" v-font-footer-color v-fw300>КРЕАТИВНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[3]" @mouseover="hoverKeyChange(3)" src="/static/icons_simple/icon41.png" alt="">
        <img v-if="hoverKey[3]" @click="characterPropsChange(3)" @mouseout="activeHover(3)" src="/static/icons_active/icon42.png" alt="">
        <h5 v-if="!hoverKey[3]" @mouseover="hoverKeyChange(3)" v-font-white v-fw300>ЭЛЕГАНТНЫЙ</h5>
        <h5 v-if="hoverKey[3]"  @click="characterPropsChange(3)" @mouseout="activeHover(3)" v-font-footer-color v-fw300>ЭЛЕГАНТНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[4]" @mouseover="hoverKeyChange(4)" src="/static/icons_simple/icon51.png" alt="">
        <img v-if="hoverKey[4]" @click="characterPropsChange(4)" @mouseout="activeHover(4)" src="/static/icons_active/icon52.png" alt="">
        <h5 v-if="!hoverKey[4]" @mouseover="hoverKeyChange(4)" v-font-white v-fw300>ЭМОЦИОНАЛЬНЫЙ</h5>
        <h5 v-if="hoverKey[4]"  @click="characterPropsChange(4)" @mouseout="activeHover(4)" v-font-footer-color v-fw300>ЭМОЦИОНАЛЬНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[5]" @mouseover="hoverKeyChange(5)" src="/static/icons_simple/icon61.png" alt="">
        <img v-if="hoverKey[5]" @click="characterPropsChange(5)" @mouseout="activeHover(5)" src="/static/icons_active/icon62.png" alt="">
        <h5 v-if="!hoverKey[5]" @mouseover="hoverKeyChange(5)" v-font-white v-fw300>НАДЕЖНЫЙ</h5>
        <h5 v-if="hoverKey[5]"  @click="characterPropsChange(5)" @mouseout="activeHover(5)" v-font-footer-color v-fw300>НАДЕЖНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[6]" @mouseover="hoverKeyChange(6)" src="/static/icons_simple/icon71.png" alt="">
        <img v-if="hoverKey[6]" @click="characterPropsChange(6)" @mouseout="activeHover(6)" src="/static/icons_active/icon72.png" alt="">
        <h5 v-if="!hoverKey[6]" @mouseover="hoverKeyChange(6)" v-font-white v-fw300>НАСТОЙЧИВЫЙ</h5>
        <h5 v-if="hoverKey[6]"  @click="characterPropsChange(6)" @mouseout="activeHover(6)" v-font-footer-color v-fw300>НАСТОЙЧИВЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[7]" @mouseover="hoverKeyChange(7)" src="/static/icons_simple/icon81.png" alt="">
        <img v-if="hoverKey[7]" @click="characterPropsChange(7)" @mouseout="activeHover(7)" src="/static/icons_active/icon82.png" alt="">
        <h5 v-if="!hoverKey[7]" @mouseover="hoverKeyChange(7)" v-font-white v-fw300>ОПТИМИСТИЧНЫЙ</h5>
        <h5 v-if="hoverKey[7]"  @click="characterPropsChange(7)" @mouseout="activeHover(7)" v-font-footer-color v-fw300>ОПТИМИСТИЧНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[8]" @mouseover="hoverKeyChange(8)" src="/static/icons_simple/icon91.png" alt="">
        <img v-if="hoverKey[8]" @click="characterPropsChange(8)" @mouseout="activeHover(8)" src="/static/icons_active/icon92.png" alt="">
        <h5 v-if="!hoverKey[8]" @mouseover="hoverKeyChange(8)" v-font-white v-fw300>ОТЗЫВЧИВЫЙ</h5>
        <h5 v-if="hoverKey[8]"  @click="characterPropsChange(8)" @mouseout="activeHover(8)" v-font-footer-color v-fw300>ОТЗЫВЧИВЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[9]" @mouseover="hoverKeyChange(9)" src="/static/icons_simple/icon101.png" alt="">
        <img v-if="hoverKey[9]" @click="characterPropsChange(9)" @mouseout="activeHover(9)" src="/static/icons_active/icon102.png" alt="">
        <h5 v-if="!hoverKey[9]" @mouseover="hoverKeyChange(9)" v-font-white v-fw300>ПРОНИЦАТЕЛЬНЫЙ</h5>
        <h5 v-if="hoverKey[9]"  @click="characterPropsChange(9)" @mouseout="activeHover(9)" v-font-footer-color v-fw300>ПРОНИЦАТЕЛЬНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[10]" @mouseover="hoverKeyChange(10)" src="/static/icons_simple/icon111.png" alt="">
        <img v-if="hoverKey[10]" @click="characterPropsChange(10)" @mouseout="activeHover(10)" src="/static/icons_active/icon112.png" alt="">
        <h5 v-if="!hoverKey[10]" @mouseover="hoverKeyChange(10)" v-font-white v-fw300>СПОРТИВНЫЙ</h5>
        <h5 v-if="hoverKey[10]"  @click="characterPropsChange(10)" @mouseout="activeHover(10)" v-font-footer-color v-fw300>СПОРТИВНЫЙ</h5>
      </div>

      <div class="property">
        <img v-if="!hoverKey[11]" @mouseover="hoverKeyChange(11)" src="/static/icons_simple/icon121.png" alt="">
        <img v-if="hoverKey[11]" @click="characterPropsChange(11)" @mouseout="activeHover(11)" src="/static/icons_active/icon122.png" alt="">
        <h5 v-if="!hoverKey[11]" @mouseover="hoverKeyChange(11)" v-font-white v-fw300>УВЕРЕННЫЙ</h5>
        <h5 v-if="hoverKey[11]"  @click="characterPropsChange(11)" @mouseout="activeHover(11)" v-font-footer-color v-fw300>УВЕРЕННЫЙ</h5>
      </div>
    </div>
    <transition name="anim1">
      <button v-if="getName"
            v-karton-font
            @click="toStartForm"
            v-fw300 class="btn">ПОЛУЧИТЬ ИМЯ</button>
    </transition>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          charProp: [false,false,false,false,false,false,false,false,false,false,false,false],
          hoverKey: [false,false,false,false,false,false,false,false,false,false,false,false],
          getName: false,
          counter: 0
        }
      },
      methods: {
        hoverKeyChange (ind) {
          if (this.hoverKey[ind]) {
          this.hoverKey.splice(ind,1,false)
        } else {
          this.hoverKey.splice(ind,1,true)
        }},
        characterPropsChange (indx) {
          if (this.charProp[indx]) {
              this.charProp.splice(indx,1,false)
          } else {
            this.charProp.splice(indx,1,true)
          }
          if (this.charProp[indx]) {
            ++this.counter
          } else  {
            --this.counter
          }
          console.log(this.counter)
          if (this.counter>2 && this.counter<6) {
            this.getName = true
          } else {
            this.getName = false
          }
          console.log(this.getName)
          },
        activeHover (ind) {
            if (!this.charProp[ind]) {
              if (this.hoverKey[ind]) {
                this.propsCounter--
                if (1<this.propsCounter<6)
                this.hoverKey.splice(ind,1,false)
              } else {
                this.hoverKey.splice(ind,1,true)
              }
            }
          },
        toStartForm () {

          this.$router.push('/forma')
        }
        }



    }
</script>

<style scoped>
  .mainBox{
    width: 100%;
    height: 50vw;
    justify-content: start;
  }

  .properties{
    width: 72%;
    height: 26vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3vw;
  }
  .property{
    width: 16.66%;
    height: 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 6vw;
    height: 6vw;
  }
  h2{
    font-size: 45%;
    margin-top: 5vw;
  }
  h3{
    font-size: 13%;
    margin-top: -3vw;
  }
  h4{
    font-family: Vladivostok;
    font-size: 12%;
    color: white;
  }
  h5{
    font-size: 12%;
    font-family: Vladivostok;
  }
  .btn{
    width: 20%;
    height: 4vw;
    background-color: #276f6f;
    color: white;
    font-size: 26%;
    margin-bottom: 3vw;
    border-radius: 0.5vw;
    border-style: none;
    text-decoration: none;
    outline: none;
    transition-property: color,background-color;
    transition-duration: 0.6s;
  }
  .btn:hover{
    color: #2e9192;
    background-color: #e3f6f4;
    transition-property: color,background-color;
    transition-duration: 0.6s;
  }

  .anim1-enter {
    opacity: 0;
  }
  .anim1-enter-active {
    transition: opacity 1s;
  }
  .anim1-enter-to {}
  .anim1-leave {}
  .anim1-leave-active {
    animation: 1s anim1-slide forwards;
    transition: opacity 0.5s;
  }
  .anim1-leave-to {
    opacity: 0;
  }

  @keyframes anim1-slide {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-100px) rotate(13grad);
    }
  }


</style>
