<template lang='pug'>
.rounded-full.border-8.p-6.bg-white(:class="borderClass")
  slot
</template>

<script>
export default {
  props:{
    borderColor:{
      type:String,

    }
  },
  computed:{
    borderClass(){
      switch(this.borderColor){
        case 'blue': return 'border-blue-400'
        case 'red': return 'border-red-400'
      }
    }
  }
}
</script>

<style>

</style>