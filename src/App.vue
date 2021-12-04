<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheBoard from './components/TheBoard.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <br>
  <TheNavbar />
  <TheBoard />
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
