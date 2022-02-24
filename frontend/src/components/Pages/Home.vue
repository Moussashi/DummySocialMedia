<template>
  <the-header></the-header>

  <section id="galerieAnimation">
    <img src="../../../public/productivity1.jpeg" alt="">
    <img src="../../../public/productivity4.jpeg" alt="">
  </section>

<font-awesome-icon icon="fa-solid fa-newspaper" />
  <section id="mainContent" >
      <div id="title" :class="color">
        <h1 v-if="!showSecondTitle">Reach New Heights in the dark</h1>
        <h1 v-else>Then Bring it to lights for the world</h1>
        <button @click="toggleTitle" > {{ buttonTxt }} </button> <!-- will be fontawesome arrow also will toggle -->
      </div>
  </section>

  <img id="chess2" src="../../../public/chess2.jpeg" alt="">

  <transition-group key="0">

    <div
      data-aos="fade-down-right" 
      data-aos-anchor-placement="top-center" 
      class="phrases"
      >
      <p>Check out the latest news on productivity</p>
      <router-link to="./news">
        <img src="../../../public/news.jpeg" class="phrasesImg" alt="">
      </router-link>
    </div>

    <div
      data-aos="fade-down-left" 
      data-aos-anchor-placement="top-center" 
      class="phrases">
        <p>Share your experience</p>
        <router-link to="./forum">
          <img src="../../../public/share.jpeg" class="phrasesImg" alt="">
        </router-link>
    </div>
    
    <div
      data-aos="fade-down-right" 
      data-aos-anchor-placement="top-center" 
      class="phrases"
      >
      <p>Use Deep Work to boost your career</p>
      <router-link to="./focus">
        <img src="../../../public/focus.jpeg" class="phrasesImg" alt="">
      </router-link>
    </div>      
    
    <div
      data-aos="fade-down-left" 
      data-aos-anchor-placement="top-center" 
      class="phrases">
      <p>Reach your highest potential</p>
      <router-link to="./blog">
          <img src="../../../public/reach.jpeg" class="phrasesImg" alt="">
        </router-link>
    </div>
  </transition-group>

  <the-footer></the-footer>

</template>

<script>

import TheHeader from '../UI/TheHeader.vue'
import TheFooter from '../UI/TheFooter.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
  
    return {
      showSecondTitle: false,
      color: '',
      buttonTxt: 'Then...',
    }
  },
  methods: {
    toggleTitle() {
      this.showSecondTitle = !this.showSecondTitle

      if (this.showSecondTitle === true) {
        this.color = 'white'
        this.buttonTxt = ':)' //find a font awesome
      } else if (this.showSecondTitle === false) {
        this.buttonTxt = 'Then...'
        this.color = 'black'
      }
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style scoped>
#mainContent {
  display: flex;
  justify-content: center;
  border: white 5px solid;
}
#title {
  text-align: center;
  padding: 10%;
  width: 100vw;
}
#title h1 {
  font-size: 5vw;
}
#title button {
  font-family: Lobster;
  padding: 1% 2%;
}
#galerieAnimation {
  width: 100vw;
  overflow: hidden;
}
#galerieAnimation img{
  margin-top: 5vh;
  width: 50vw;
  height: auto;
}
#chess2 {
  width: 100vw;
}
button {
  border: white solid 2px;
}
.white {
  animation: turnWhite 1.5s forwards;
  color: black;
}
.black {
  animation: turnBlack 2s forwards;
  color: white;
}
.phrases {
  list-style: none;
  font-size: 2rem;
  padding: 15vh;
}
.phrasesImg {
  width: 40%;
}
.phrasesImg:hover {
  animation: phrasesImg 0.5s forwards;
}
@keyframes turnWhite {
  to {
    background-color: white;
  }
}
@keyframes turnBlack {
  to {
    background-color: Black;
  }
}
@keyframes phrasesImg {
  from {
    width: 40%;
  }
  to {
    width: 50%;
    border: white 3px solid;
  }
}
</style>