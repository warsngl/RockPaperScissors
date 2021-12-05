<template lang='pug'>
.rounded-full.border-8.p-6.bg-white(:class="extendClass")
  slot
</template>

<script>
export default {
  data:()=>({
    isActive:false,
  }),
  props:{
    idx:{
      type:Number,
    },

  },
  computed:{
    borderClass(){
      switch(this.idx){
        case 0: return 'border-blue-400'
        case 1: return 'border-red-400'
        case 2: return 'border-green-400'
      }
    },
    extendClass(){
      return `${this.borderClass}`
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>