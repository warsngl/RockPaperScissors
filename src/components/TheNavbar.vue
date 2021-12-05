<template lang='pug'>
.navbar
  .panel
    .left
      h1 ROCK
      h1 PAPER
      h1 SCISSORS
    .right
      p.text-gray-600 Score
      p.text-4xl {{score}}
</template>

<script>
export default {
  props:{
    score:{
      type:Number
    }
  },
  data:()=>({
  })
}
</script>

<style scoped>
h1{
  font-size: 16px;
  text-align: left;
}
.navbar{
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
  padding:20px;
  max-width: 500px;
  border: 2px solid;
  border-radius: 10px;
}
.panel{
  display: flex;
}
.left{
  flex-grow: 1;
}
.right{
  background: white;
  color:black;
  padding: 5px 30px;
  border-radius:10px;
}

</style>