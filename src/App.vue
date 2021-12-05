<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheBoard from './components/TheBoard.vue'
import TheNavbar from './components/TheNavbar.vue'
export default{
  data:()=>({
    score:0,
  }),
  components:{
    TheBoard,
    TheNavbar,
  },
  methods:{
    changeScore(d){
      this.score=this.score+d
    }
  }
}
</script>

<template>
  <br>
  <TheNavbar :score='score' />
  <TheBoard @change-score='changeScore' />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9A0680;
  background: #160040;
  width: 100vw;
  height: 100vh;
}
body{
  margin:0;
}
</style>
