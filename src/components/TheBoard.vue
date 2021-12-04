<template lang='pug'>
.fc
  .fc.flex-wrap.w-64.mt-10
    TheCard.mr-10(borderColor='blue')
      img.icon(src='../assets/paper.png')
    TheCard(borderColor='red')
      img.icon(src='../assets/scissors.png')
    TheCard(borderColor='blue')
      img.icon(src='../assets/rock.png')
</template>

<script setup>
import TheCard from './TheCard.vue'

</script>

<style>
.icon{
  @apply w-10 h-10
}
.fc{
  @apply flex justify-center
}
</style>