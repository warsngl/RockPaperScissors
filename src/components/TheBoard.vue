<template lang='pug'>
.fcc
  p.text-6xl.font-bold.uppercase {{result || 'Choose chip'}}
  .fc.flex-wrap.w-64.mt-10.ml-6
    TheCard.mr-6(v-for='c in chips' :idx='c.id' @click='choose(c.id)' :class="c.isActive?'shadow-xxl':null")
      img.icon(:src="'./src/assets/'+c.img+'.png'")
</template>

<script>
import TheCard from './TheCard.vue'
export default{
  components:{TheCard,},
  data:()=>({
    result:'',
    chips:[
      {id:0,name:'Paper',img:'paper',isActive:false},
      {id:1,name:'Scissors',img:'scissors',isActive:false},
      {id:2,name:'Rock',img:'rock',isActive:false},
    ],
  }),
  methods:{
    choose(idx){
      this.chips[idx].isActive=true
      this.purge(idx)
      this.turn(idx)
    },
    turn(idx){
      this.ai=Math.floor(Math.random()*3)
      switch(idx-this.ai){
        case 2: return this.result='lose';
        case 0:  return this.result='draw';
        case 1: return this.result='win';
        case -1: return this.result='lose';
        case -2: return this.result='win';
      }
    },
    purge(idx){
      this.chips.map(({id})=>{
        idx!==id && (this.chips[id].isActive=false)
      })
    }
  },
  computed:{
    
  },
  watch:{
    result(){
      switch(this.result){
        case 'win':return this.$emit('change-score',1);
        case 'lose':return this.$emit('change-score',-1);
      }
    }
  }
}
</script>

<style>
.icon{
  @apply w-10 h-10
}
.fc{
  @apply flex justify-center
}
.fcc{
  @apply flex items-center flex-col
}
.shadow-xxl{
  box-shadow: 0px 0px 8px 15px rgba(25, 0, 244, 0.44);
}
</style>